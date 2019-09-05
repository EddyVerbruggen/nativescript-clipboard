declare module "nativescript-clipboard" {
  /**
   * Sets text on the clipboard, replacing anything currently on there.
   */
  export function setText(data: string): Promise<void>;

  /**
   * Non-async version of setText.
   */
  export function setTextSync(data: string): void;

  /**
   * Gets any currently present text from the clipboard.
   */
  export function getText(): Promise<string>;

  /**
   * Non-async version of getText.
   */
  export function getTextSync(): string;
}