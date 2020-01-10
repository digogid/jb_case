const mysql = require('mysql2/promise');

class RepositoryBase {
  protected connection: any;

  constructor(){}

  connect = async () => {
    this.connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PWD,
      database: process.env.DB_NAME
    });
  }
}

export default RepositoryBase;