import RepositoryBase from './repositoryBase';
import Usuario from '../domain/Usuario';
declare class UsuarioRepository extends RepositoryBase {
    constructor();
    list: (id?: string | undefined) => Promise<Usuario[]>;
    save: (usuario: Usuario) => Promise<Usuario>;
}
export default UsuarioRepository;
