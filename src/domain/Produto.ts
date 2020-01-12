import { v4 as uuid } from 'uuid';

class Produto {
  id: string;
  name: string;
  bar_code: string;
  productPicture: string;
  inStock: number;
  category: number;

  constructor(name: string, bar_code: string, productPicture: string, inStock: number, category: number, id? : string) {
    this.id = id ?? uuid();
    this.name = name;
    this.bar_code = bar_code;
    this.productPicture = productPicture;
    this.inStock = inStock;
    this.category = category;
  }
}

export default Produto;