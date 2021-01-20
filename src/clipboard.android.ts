import { Utils } from "@nativescript/core";

const writeToClipboard = (content: string): void => {
  const clipboard = Utils.ad.getApplicationContext().getSystemService(android.content.Context.CLIPBOARD_SERVICE);
  const clip = android.content.ClipData.newPlainText("App clipboard data", content);
  clipboard.setPrimaryClip(clip);
};

const readFromClipboard = (clipboard): string => {
  const item = clipboard.getPrimaryClip().getItemAt(0);
  let content = item.getText().toString();
  return content || "";
};

export function setText(content: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
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
      const clipboard = Utils.ad.getApplicationContext().getSystemService(android.content.Context.CLIPBOARD_SERVICE);
      if (!clipboard.getPrimaryClipDescription().hasMimeType(android.content.ClipDescription.MIMETYPE_TEXT_PLAIN) &&
          !clipboard.getPrimaryClipDescription().hasMimeType(android.content.ClipDescription.MIMETYPE_TEXT_HTML)) {
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
    const clipboard = Utils.ad.getApplicationContext().getSystemService(android.content.Context.CLIPBOARD_SERVICE);
    if (!clipboard.getPrimaryClipDescription().hasMimeType(android.content.ClipDescription.MIMETYPE_TEXT_PLAIN) &&
        !clipboard.getPrimaryClipDescription().hasMimeType(android.content.ClipDescription.MIMETYPE_TEXT_HTML)) {
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
