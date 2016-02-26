declare module "nativescript-clipboard" {
  /**
   * Sets text on the clipboard, replacing anything currently on there.
   */
  export function setText(data: string): Promise<any>;

  /**
   * Gets any currently present text from the clipboard.
   */
  export function getText(): Promise<string>;
}