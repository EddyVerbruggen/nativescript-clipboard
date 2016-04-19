var application = require("application");

var _context;
function getContext() {
  if(!_context){
    _context = application.android.context;
  }
  return _context;
}

exports.setText = function (content) {
  return new Promise(function (resolve, reject) {
    try {
      // copy to clipboard
      var clipboard = getContext().getSystemService(android.content.Context.CLIPBOARD_SERVICE);
      var clip = android.content.ClipData.newPlainText("App clipboard data", content);
      clipboard.setPrimaryClip(clip);
      resolve();
    } catch (ex) {
      console.log("Error in clipboard.setText: " + ex);
      reject(ex);
    }
  });
};

exports.getText = function () {
  return new Promise(function (resolve, reject) {
    try {
      var clipboard = getContext().getSystemService(android.content.Context.CLIPBOARD_SERVICE);
      if (!clipboard.getPrimaryClipDescription().hasMimeType(android.content.ClipDescription.MIMETYPE_TEXT_PLAIN)) {
        reject("No compatible clipboard content found");
      } else {
        var item = clipboard.getPrimaryClip().getItemAt(0);
        var content = item.getText().toString();
        if (content == null) {
          content = "";
        }
        resolve(content);
      }
    } catch (ex) {
      console.log("Error in clipboard.getText: " + ex);
      reject(ex);
    }
  });
};
