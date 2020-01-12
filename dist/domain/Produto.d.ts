declare class Produto {
    id: string;
    name: string;
    bar_code: string;
    productPicture: string;
    inStock: number;
    category: number;
    constructor(name: string, bar_code: string, productPicture: string, inStock: number, category: number, id?: string);
}
export default Produto;
