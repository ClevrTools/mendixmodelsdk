"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const version_1 = require("../../version");
const utils_1 = require("../utils");
const authentication_1 = require("./authentication");
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
        requestImpl = require("requestretry");
    }
    prepareRequestOptions(opts) {
        const options = this.generateStandardOptions(opts.method, opts.url, true);
        options.gzip = true;
        if (opts.headers) {
            options.headers = Object.assign(Object.assign({}, opts.headers), options.headers);
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
        const requestOptions = Object.assign(Object.assign({}, this.prepareRequestOptions(opts)), { maxAttempts: 3, retryDelay: 200, retryStrategy: requestImpl.RetryStrategies.NetworkError });
        this.handleRequest(requestOptions, success, failure);
    }
    requestMultipartBinaryFileUpload(opts, success, failure) {
        const options = this.generateStandardOptions(opts.method, opts.url, true);
        options.timeout = LONG_TIMEOUT; // 15 minutes: uploading mpk's takes some time, and can be quite large.
        if (!opts.fileName) {
            throw new Error("File to upload is missing.");
        }
        if (opts.headers) {
            options.headers = Object.assign(Object.assign({}, opts.headers), options.headers);
        }
        options.formData = opts.body || {};
        // Convert boolean properties to string.
        // Known issue: https://github.com/form-data/form-data/issues/137
        for (const key in options.formData) {
            if (options.formData.hasOwnProperty(key) && typeof options.formData[key] === "boolean") {
                options.formData[key] = options.formData[key].toString();
            }
        }
        options.formData[opts.fileParameterName] = fs.createReadStream(opts.fileName);
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
        const subUrl = urlEndpoint.substring("/api".length);
        return utils_1.utils.combineUrl(this.config.endPoint || "", subUrl);
    }
    generateStandardOptions(method, url, acceptJson) {
        const options = {
            method: this.sanitizedMethod(method),
            url: this.url(url),
            timeout: SHORT_TIMEOUT,
            maxAttempts: 1,
            pool: {
                maxSockets: 20
            },
            headers: {
                "User-Agent": `mendixmodelsdk/${version_1.SDK_VERSION} ${process.platform} ${process.arch} node${process.versions.node}`
            }
        };
        if (acceptJson) {
            options.json = true;
        }
        const authInfo = authentication_1.getAuthInfo(this.config);
        options.auth = { username: authInfo.username };
        options.auth.password = authInfo.password;
        if (authInfo.openid) {
            options.headers.openid = authInfo.openid;
        }
        return options;
    }
    handleRequest(options, success, failure) {
        // We can't specify the type properly here as requestretry refers to http.IncomingMessage directly
        requestImpl(options, (error, response, body) => {
            if (error) {
                const errorCode = error.code;
                if (errorCode === "ECONNRESET") {
                    failure({
                        error: "Not available",
                        description: "The Mendix Model API Server is not available. Please try again later.",
                        url: options.url
                    });
                }
                else if (errorCode === "EPIPE") {
                    console.warn("Encountered EPIPE - " +
                        "assuming failure callback is already called for this request with status code 413 (Request Entity Too Large).");
                }
                else {
                    failure({
                        error: "No response",
                        description: `The Mendix Model API Server failed to respond. Result code: ${errorCode}`,
                        url: options.url
                    });
                }
            }
            else if (response.statusCode < 200 || response.statusCode > 299) {
                failure({
                    error: body,
                    statusCode: response.statusCode,
                    url: options.url
                });
            }
            else {
                success(body, response);
            }
        });
    }
}
exports.RestTransportation = RestTransportation;
//# sourceMappingURL=rest-transportation.js.map