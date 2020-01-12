declare class RepositoryBase {
    protected connection: any;
    constructor();
    connect: () => Promise<void>;
}
export default RepositoryBase;
