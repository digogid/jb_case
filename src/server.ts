import * as bodyParser from 'body-parser'
import { config } from 'dotenv';
import { join } from 'path';
const path = require('path')

const configPath = join(path.resolve(__dirname), './config', `.env`)
config({ path: configPath });

import App from "./app";
import UsuarioController from "./controllers/UsuarioController";
import ProdutoController from "./controllers/ProdutoController";

const app = new App({
  port: 8088,
  controllers: [UsuarioController, ProdutoController],
  middlewares: [
      bodyParser.json(),
      bodyParser.urlencoded({ extended: true })
  ]
});

app.listen();
