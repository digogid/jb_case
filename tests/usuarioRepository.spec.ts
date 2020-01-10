import Repository from '../src/mysql/usuarioRepository';

test('deve retornar uma lista de usuários', () => {
  expect(new Repository().listar()).toReturn();
});