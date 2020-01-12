import { v4 as uuid } from 'uuid';

class Usuario {
  id: string;
  name: string;
  email: string;

  constructor(name: string, email: string, id?: string) {
    this.id = id ?? uuid();
    this.name = name;
    this.email = email;
  }
}

export default Usuario;