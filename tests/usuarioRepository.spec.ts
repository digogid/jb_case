import { config } from 'dotenv';
import { join } from 'path';
const path = require('path')

import Repository from '../src/mysql/usuarioRepository';
import Usuario from '../src/domain/Usuario';
const configPath = join(path.resolve(__dirname), '../src/config', `.env`)
let repo: Repository;
config({ path: configPath });

beforeAll(() => {
  repo = new Repository();
})

test('deve retornar uma lista de usuários', async () => {
  const usuarios = await repo.list();
  expect(usuarios.length).toBeGreaterThan(0);
});

test('item deve ser da classe específica', async () => {
  const [usuario] = await repo.list();
  expect(usuario).toBeInstanceOf(Usuario);
});

test('deve retornar um usuário', async () => {
  const usuarios = await repo.list('987cc07d-3349-11ea-941d-641c67843df4');
  expect(usuarios.length).toStrictEqual(1);
});

test('deve inserir um usuário', async () => {
  const expected = new Usuario('Teste User', `teste-${new Date().getTime()}@mail.com`);
  const actual = await repo.save(expected);
  expect(actual).toBe(expected);
});