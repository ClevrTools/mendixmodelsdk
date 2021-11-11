# mendixmodelsdk

A fork of npm mendixmodelsdk

Use to to keep customizations and bugfixes for the npm module while updating.

To publish changes navigate to package and run `npm publish`

## Changes

- `package.json` - Line: **2**

```javascript
//Original
"name": "mendixmodelsdk",
// Updated
"name": "@clevr/mendixmodelsdk",
```

- `/dist/sdk/internal/RestTransportation.js` - Line: **11-12**

```javascript
// Original
const SHORT_TIMEOUT = 1 * 60 * 1000;
const LONG_TIMEOUT = 15 * 60 * 1000;

// Updated
const SHORT_TIMEOUT = 5 * 60 * 1000;
const LONG_TIMEOUT = 45 * 60 * 1000;
```
