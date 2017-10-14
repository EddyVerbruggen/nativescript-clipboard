var utils = require("utils/utils");

exports.setText = function (content) {
  return new Promise(function (resolve, reject) {
    try {
      var pasteboard = utils.ios.getter(UIPasteboard, UIPasteboard.generalPasteboard);
      pasteboard.setValueForPasteboardType(content, kUTTypePlainText);
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
      var pasteboard = utils.ios.getter(UIPasteboard, UIPasteboard.generalPasteboard);
      var content = pasteboard.string || pasteboard.valueForPasteboardType(kUTTypePlainText);
      resolve(content);
    } catch (ex) {
      console.log("Error in clipboard.getText: " + ex);
      reject(ex);
    }
  });
};
