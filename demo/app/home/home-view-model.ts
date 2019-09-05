import { Observable } from "tns-core-modules/data/observable";
import { getText, setText, getTextSync, setTextSync } from "nativescript-clipboard";

export class HomeViewModel extends Observable {
    public clipboardText: string;

    constructor() {
        super();
        this.clipboardText = "Tap a button above..";
    }

    public setTextAsync(): void {
        setText("I was written Async @ " + new Date())
            .then(() => this.feedback("Wrote to the clipboard"))
            .catch((err: string) => this.feedback(`Error: ${err}`));
    }

    public getTextAsync(): void {
        getText()
            .then((text: string) => this.feedback(text))
            .catch((err: string) => this.feedback(`Error: ${err}`));
    }

    public setTextSync(): void {
        setTextSync("I was written sync @ " + new Date());
        this.feedback("Wrote to the clipboard");
    }

    public getTextSync(): void {
        const text = getTextSync();
        this.feedback(text);
    }

    private feedback(text: string): void {
        this.set("clipboardText", text);
    }
}
