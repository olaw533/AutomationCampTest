import { Page } from "@playwright/test";
import { LoginWidget } from './components/LoginWidgets';
import { AlertButtonWidget } from "./components/AlertButtonWidget";


export class LayoutOnePage {
    readonly page: Page;
    readonly login: LoginWidget;
    readonly alertButton: AlertButtonWidget;
//    readonly form: FormWidget;
//    readonly table: TableWidget;

    constructor(page: Page){
        this.page = page;
        this.login = new LoginWidget(page);
        this.alertButton = new AlertButtonWidget(page);
 //       this.form = new FormWidget(page);
 //       this.table = new TableWidget(page);
    }
}