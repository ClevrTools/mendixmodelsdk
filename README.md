# mendixmodelsdk

A fork of npm mendixmodelsdk

Use to to keep customizations and bugfixes for the npm module while updating.

To publish changes navigate to package and run `npm publish`

## Steps
- Delete folder '.\package'
- Run in the terminal from root folder:  
```npm pack mendixmodelsdk```
- Run in the terminal from root folder:  
```tar xzvf mendixmodelsdk-<version>/tar.gz```
- Files are extracted to '.\package' folder
- Make the changes listed in the next section
- Run in the terminal:  
```npm login```
- Follow instructions to login NPM
- Go to './package':  
```cd .\package```
- Run in the terminal to publish to NPM:  
```npm publish```
- Follow NPM steps to enter 2FA
- After publish, you will receive an email



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
