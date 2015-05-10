# NativeScript Clipboard

A NativeScript module to copy and paste data to and from the device clipboard.

## Installation
From the command prompt go to your app's `app` folder and execute:

```
npm install nativescript-clipboard
```

## Usage

### setText

```js
  var clipboard = require( "./node_modules/nativescript-clipboard/clipboard" );

  clipboard.setText("Something relevant to put on the clipboard.").then(function() {
      console.log("OK, copied to the clipboard");
  })
```

### getText

```js
  var clipboard = require( "./node_modules/nativescript-clipboard/clipboard" );

  clipboard.getText().then(function(content) {
      alert("Read from clipboard: " + content);
  })
```

## Future work
Implement support for storing data (image, etc) on the clipboard.