import RepositoryBase from "./repositoryBase";
import Usuario from "../domain/Usuario";

class UsuarioRepository extends RepositoryBase {
  constructor() {
    super();
  }

  list = async (id?: string): Promise<Array<Usuario>> => {
    await this.connect();
    let sqlQuery = "SELECT * FROM usuario where 1 = 1";
    let params = [];
    if (id) {
      params.push(id);
      sqlQuery += " AND id = ?";
    }

    const [usuariosSql] = await this.connection.execute(sqlQuery, params);
    this.connection.end();

    const usuarios: Array<Usuario> = [];
    usuariosSql.forEach((u: any) => {
      usuarios.push(new Usuario(u.name, u.email, u.id));
    });

    return usuarios;
  };

  save = async (usuario: Usuario): Promise<Usuario> => {
    await this.connect();
    const sqlStatement: string =
      "INSERT INTO Usuario (id, name, email) VALUES (?,?,?)";

    try {
      const insertResult = await this.connection.execute(sqlStatement, [
        usuario.id,
        usuario.name,
        usuario.email
      ]);
      if (insertResult[0].affectedRows > 0) 
        return usuario;
      throw { message: 'Não foi possível inserir o usuário. Tente novamente mais tarde.' }
    } catch (error) {
      throw error;
    }
  };
}

export default UsuarioRepository;
