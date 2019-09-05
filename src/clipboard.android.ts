import * as utils from "tns-core-modules/utils/utils";

const writeToClipboard = (content: string): void => {
  const clipboard = utils.ad.getApplicationContext().getSystemService(android.content.Context.CLIPBOARD_SERVICE);
  const clip = android.content.ClipData.newPlainText("App clipboard data", content);
  clipboard.setPrimaryClip(clip);
};

const readFromClipboard = (clipboard): string => {
  const item = clipboard.getPrimaryClip().getItemAt(0);
  let content = item.getText().toString();
  return content || "";
};

export function setText(content: string): Promise<void> {
  return new Promise<void>(function (resolve, reject) {
    try {
      writeToClipboard(content);
      resolve();
    } catch (ex) {
      console.log("Error in clipboard.setText: " + ex);
      reject(ex);
    }
  });
}

export function setTextSync(content: string): void {
  try {
    writeToClipboard(content);
  } catch (ex) {
    console.log("Error in clipboard.setTextSync: " + ex);
  }
}

export function getText(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      const clipboard = utils.ad.getApplicationContext().getSystemService(android.content.Context.CLIPBOARD_SERVICE);
      if (!clipboard.getPrimaryClipDescription().hasMimeType(android.content.ClipDescription.MIMETYPE_TEXT_PLAIN)) {
        reject("No compatible clipboard content found");
      } else {
        resolve(readFromClipboard(clipboard));
      }
    } catch (ex) {
      console.log("Error in clipboard.getText: " + ex);
      reject(ex);
    }
  });
}

export function getTextSync(): string {
  try {
    const clipboard = utils.ad.getApplicationContext().getSystemService(android.content.Context.CLIPBOARD_SERVICE);
    if (!clipboard.getPrimaryClipDescription().hasMimeType(android.content.ClipDescription.MIMETYPE_TEXT_PLAIN)) {
      console.log("No compatible clipboard content found");
      return "";
    } else {
      return readFromClipboard(clipboard);
    }
  } catch (ex) {
    console.log("Error in clipboard.getText: " + ex);
    return "";
  }
}