import { Application } from "express";
declare class App {
    app: Application;
    port: number;
    constructor(appInit: {
        port: number;
        controllers: any;
    });
    private routes;
    listen(): void;
}
export default App;
