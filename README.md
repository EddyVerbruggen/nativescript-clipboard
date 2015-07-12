# NativeScript Clipboard

A NativeScript plugin to copy and paste data from and to the device clipboard.

## Installation
From the command prompt go to your app's `app` folder and execute:

```
tns plugin add nativescript-clipboard
```

## Usage

To use this plugin you must first require() it:

```js
var insomnia = require("nativescript-clipboard");
```

### setText

```js
  clipboard.setText("Something relevant to put on the clipboard.").then(function() {
      console.log("OK, copied to the clipboard");
  })
```

### getText

```js
  clipboard.getText().then(function(content) {
      console.log("Read from clipboard: " + content);
  })
```

## Future work
Implement support for storing data (image, etc) on the clipboard.