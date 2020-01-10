import RepositoryBase from './repositoryBase';
import Usuario from '../domain/Usuario';


class UsuarioRepository extends RepositoryBase {
  constructor() {
    super();
  }

  listar = async (id?: string) : Promise<Array<Usuario>> => {
    await this.connect();
    let sqlQuery = 'SELECT * FROM usuario where 1 = 1';
    let params = [];
    if (id) {
      params.push(id);
      sqlQuery += " AND id = ?"
    }

    const [usuarios] = await this.connection.execute(sqlQuery, params);
    this.connection.end();

    //todo: cast de rows p/ classe Usuario
    // replicar lógica para produtoRepository

    return usuarios;
  }
}

export default UsuarioRepository;