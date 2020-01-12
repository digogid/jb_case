import RepositoryBase from "./repositoryBase";
import Produto from "../domain/Produto";

class ProdutoRepository extends RepositoryBase {
  constructor() {
    super();
  }

  list = async (id?: string): Promise<Array<Produto>> => {
    await this.connect();
    let sqlQuery = "SELECT * FROM Produto where category = 1";
    let params = [];
    if (id) {
      params.push(id);
      sqlQuery += " AND id = ?";
    }

    const [produtosSql] = await this.connection.execute(sqlQuery, params);
    this.connection.end();

    const produtos: Array<Produto> = [];
    produtosSql.forEach((p: any) => {
      produtos.push(new Produto(p.name, p.bar_code, p.productPicture, p.inStock, p.category));
    });

    return produtos;
  };

  save = async (produto: Produto): Promise<Produto> => {
    await this.connect();
    const sqlStatement: string =
      "INSERT INTO Produto (id, name, bar_code, productPicture, inStock, category) VALUES (?, ?, ?, ?, ?, ?)";

    try {
      const insertResult = await this.connection.execute(sqlStatement, [
        produto.id,
        produto.name,
        produto.bar_code,
        produto.productPicture,
        produto.inStock,
        produto.category
      ]);
      if (insertResult[0].affectedRows > 0) 
        return produto;
      throw { message: 'Não foi possível inserir o produto. Tente novamente mais tarde.' }
    } catch (error) {
      throw error;
    }
  };
}

export default ProdutoRepository;
