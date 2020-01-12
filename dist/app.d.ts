declare class App {
    private app;
    private port;
    constructor(appInit: {
        port: number;
        controllers: any;
        middlewares: any;
    });
    private registerMiddlewares;
    private registerRoutes;
    listen(): void;
}
export default App;
