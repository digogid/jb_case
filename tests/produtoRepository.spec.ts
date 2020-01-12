import { config } from 'dotenv';
import { join } from 'path';
const path = require('path')

import Repository from '../src/mysql/produtoRepository';
import Produto from '../src/domain/Produto';
const configPath = join(path.resolve(__dirname), '../src/config', `.env`)
let repo: Repository;
config({ path: configPath });

beforeAll(() => {
  repo = new Repository();
})

test('deve retornar uma lista de produtos', async () => {
  const produtos = await repo.list();
  expect(produtos.length).toBeGreaterThan(0);
});

test('item deve ser da classe específica', async () => {
  const [produto] = await repo.list();
  expect(produto).toBeInstanceOf(Produto);
});

test('deve retornar um produto', async () => {
  const produtos = await repo.list('9884c62e-3349-11ea-941d-641c67843df4');
  expect(produtos.length).toStrictEqual(1);
});

test('deve inserir um produto', async () => {
  const expected = new Produto(`Produto Teste - ${new Date().getTime()}`, new Date().getTime().toString(), 'http://pudim.com.br', 0, 1);
  const actual = await repo.save(expected);
  expect(actual).toBe(expected);
});