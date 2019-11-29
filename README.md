# mendixmodelsdk

A fork of npm mendixmodelsdk

Use to to keep customizations and bugfixes for the npm module while updating.

## Changes

* `package.json` - Line: **2**

```javascript
//Original
"name": "mendixmodelsdk",
// Updated
"name": "@gajduk/mendixmodelsdk",
```

* `/dist/sdk/internal/model-server-client-impl.js` - Line: **93**  

```javascript
//Original
this.createDownloadHandler(outFilePath, (data, response) => {
    callback(data);
}
// Updated
this.createDownloadHandler(outFilePath, (data, response) => {
    callback(data);
}
```

* `/dist/sdk/internal/rest-transportation.js` - Line: **9**  


```javascript
// Original
const SHORT_TIMEOUT = 1 * 60 * 1000;
const LONG_TIMEOUT = 15 * 60 * 1000;

// Updated
const SHORT_TIMEOUT = 5 * 60 * 1000;
const LONG_TIMEOUT = 45 * 60 * 1000;
```