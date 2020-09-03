import { NavigatedData, Page } from "@nativescript/core";
import { HomeViewModel } from "./home-view-model";

export function navigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
}
