'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.RestTransportation = void 0;
const fs = require('fs');
const version_1 = require('../../version');
const utils_1 = require('../utils');
const getAuthInfo_1 = require('./getAuthInfo');
// Postpone requiring the 'request' module to prevent errors when using the Model SDK in the browser.
let requestImpl;
const SHORT_TIMEOUT = 5 * 60 * 1000;
const LONG_TIMEOUT = 45 * 60 * 1000;
/**
 * Default implementation of {@link ITransportation} that communicates with the Model API Server over
 * HTTP using Request.
 */
class RestTransportation {
  constructor(config) {
    this.config = config;
    requestImpl = require('request');
  }
  prepareRequestOptions(opts) {
    const options = this.generateStandardOptions(opts.method, opts.url, true);
    options.gzip = true;
    if (opts.headers) {
      options.headers = Object.assign(
        Object.assign({}, opts.headers),
        options.headers
      );
    }
    if (opts.longTimeout) {
      options.timeout = LONG_TIMEOUT;
    }
    if (opts.body) {
      options.body = opts.body;
    }
    return options;
  }
  request(opts, success, failure) {
    this.handleRequest(this.prepareRequestOptions(opts), success, failure);
  }
  retryableRequest(opts, success, failure) {
    this.handleRequest(
      Object.assign(Object.assign({}, this.prepareRequestOptions(opts)), {
        maxAttempts: 3,
        retryDelay: 200
      }),
      success,
      failure
    );
  }
  requestMultipartBinaryFileUpload(opts, success, failure) {
    const options = this.generateStandardOptions(opts.method, opts.url, true);
    options.timeout = LONG_TIMEOUT; // 15 minutes: uploading mpk's takes some time, and can be quite large.
    if (!opts.fileName) {
      throw new Error('File to upload is missing.');
    }
    if (opts.headers) {
      options.headers = Object.assign(
        Object.assign({}, opts.headers),
        options.headers
      );
    }
    options.formData = opts.body || {};
    // Convert boolean properties to string.
    // Known issue: https://github.com/form-data/form-data/issues/137
    for (const key in options.formData) {
      if (
        options.formData.hasOwnProperty(key) &&
        typeof options.formData[key] === 'boolean'
      ) {
        options.formData[key] = options.formData[key].toString();
      }
    }
    options.formData[opts.fileParameterName] = fs.createReadStream(
      opts.fileName
    );
    this.handleRequest(options, success, failure);
  }
  requestFileDownload(opts, success, failure) {
    const options = this.generateStandardOptions(opts.method, opts.url, false);
    options.encoding = null;
    options.timeout = LONG_TIMEOUT;
    this.handleRequest(options, success, failure);
  }
  sanitizedMethod(method) {
    return method.toUpperCase();
  }
  url(urlEndpoint) {
    const subUrl = urlEndpoint.substring('/api'.length);
    return utils_1.utils.combineUrl(this.config.endPoint || '', subUrl);
  }
  generateStandardOptions(method, url, acceptJson) {
    const options = {
      method: this.sanitizedMethod(method),
      url: this.url(url),
      timeout: SHORT_TIMEOUT,
      pool: { maxSockets: 20 },
      headers: {
        'User-Agent': `mendixmodelsdk/${version_1.SDK_VERSION} ${process.platform} ${process.arch} node${process.versions.node}`
      }
    };
    if (acceptJson) {
      options.json = true;
    }
    const authInfo = getAuthInfo_1.getAuthInfo(this.config);
    options.auth = { username: authInfo.username };
    options.auth.password = authInfo.password;
    if (authInfo.openid) {
      options.headers.openid = authInfo.openid;
    }
    return options;
  }
  handleRequest(options, success, failure) {
    // tslint:disable-next-line: no-floating-promises
    this.retryRequest(options).then(({ error, response, body }) => {
      if (error) {
        const errorCode = error.code;
        if (errorCode === 'ECONNRESET') {
          failure({
            error: 'Not available',
            description:
              'The Mendix Model API Server is not available. Please try again later.',
            url: options.url
          });
        } else if (errorCode === 'EPIPE') {
          console.warn(
            'Encountered EPIPE - ' +
              'assuming failure callback is already called for this request with status code 413 (Request Entity Too Large).'
          );
        } else {
          failure({
            error: 'No response',
            description: `The Mendix Model API Server failed to respond. Result code: ${errorCode}`,
            url: options.url
          });
        }
      } else if (response.statusCode < 200 || response.statusCode > 299) {
        failure({
          error: body,
          statusCode: response.statusCode,
          url: options.url
        });
      } else {
        success(body, response);
      }
    });
  }
  retryRequest(options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      const retryDelay = options.retryDelay;
      const maxAttempts =
        (_a = options.maxAttempts) !== null && _a !== void 0 ? _a : 1;
      const filteredOptions = Object.assign({}, options);
      delete filteredOptions.retryDelay;
      delete filteredOptions.maxAttempts;
      let lastResult;
      for (let i = 0; i < maxAttempts; i++) {
        lastResult = yield new Promise((resolve) =>
          requestImpl(filteredOptions, (error, response, body) =>
            resolve({ error, response, body })
          )
        );
        if (!lastResult.error || !isNetworkError(lastResult.error)) {
          break;
        } else if (retryDelay && maxAttempts > i + 1) {
          yield new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
      }
      return lastResult;
    });
  }
}
exports.RestTransportation = RestTransportation;
const NETWORK_ERRORS = [
  'ECONNRESET',
  'ENOTFOUND',
  'ESOCKETTIMEDOUT',
  'ETIMEDOUT',
  'ECONNREFUSED',
  'EHOSTUNREACH',
  'EPIPE',
  'EAI_AGAIN'
];
function isNetworkError(error) {
  return error && NETWORK_ERRORS.includes(error.code);
}
//# sourceMappingURL=RestTransportation.js.map
