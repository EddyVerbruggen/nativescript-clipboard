export function setText(content: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    try {
      UIPasteboard.generalPasteboard.setValueForPasteboardType(content, kUTTypePlainText);
      resolve();
    } catch (ex) {
      console.log("Error in clipboard.setText: " + ex);
      reject(ex);
    }
  });
}

export function setTextSync(content: string): void {
  try {
    UIPasteboard.generalPasteboard.setValueForPasteboardType(content, kUTTypePlainText);
  } catch (ex) {
    console.log("Error in clipboard.setText: " + ex);
  }
}

export function getText(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    try {
      const content = UIPasteboard.generalPasteboard.string || UIPasteboard.generalPasteboard.valueForPasteboardType(kUTTypePlainText);
      resolve(content);
    } catch (ex) {
      console.log("Error in clipboard.getText: " + ex);
      reject(ex);
    }
  });
}

export function getTextSync(): string {
  try {
    return UIPasteboard.generalPasteboard.string || UIPasteboard.generalPasteboard.valueForPasteboardType(kUTTypePlainText);
  } catch (ex) {
    console.log("Error in clipboard.getText: " + ex);
    return "";
  }
}