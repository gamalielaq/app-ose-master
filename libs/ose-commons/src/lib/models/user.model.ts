export interface IUser {
  email: string;
  id: string;
  names: string;
  lastNames: string;
  rol: string;
}

export enum UserRol {
  consultant = '2',
  admin = '1',
  
}

const urlStart: Map<UserRol, string> = new Map([
  [ UserRol.consultant, '/' ],
  [ UserRol.consultant, '/administrador' ],
  [ UserRol.admin, '/administrador' ]
]);

export class User {

  usuario_id:     string;
  usuario_correo: string;
  usuario_nombre: string;
  perfil_id:      UserRol;
  nbf:            number;
  exp:            number;
  iat:            number;

  constructor( data)  {

    this.perfil_id = data ? data.perfil_id as UserRol : null;

    this.usuario_nombre = data.usuario_nombre;
  }

  get fullName() {
    return `${this.usuario_nombre}`;
  }

  get startUrl() {
    return urlStart.get(this.perfil_id);
  }

}