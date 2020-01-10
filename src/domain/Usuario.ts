import { v4 as uuid } from 'uuid';

class Usuario {
  id: string;
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.id = uuid();
    this.name = name;
    this.email = email;
  }
}

export default Usuario;