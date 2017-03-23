# clean-assets-webpack-plugin

A webpack plugin that deletes all files not emitted by webpack in the output directory after every build.

## Installation

```
npm install clean-assets-webpack-plugin --save-dev
```

## Example Webpack Config

``` javascript
var CleanAssetsPlugin = require('clean-assets-webpack-plugin');

module.exports = {
  plugins: [
    new CleanAssetsPlugin()
  ]
}
```

## Usage
```javascript
new CleanAssetsPlugin()
```

## License
http://www.opensource.org/licenses/mit-license.php

