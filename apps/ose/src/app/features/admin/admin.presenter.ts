import { Injectable } from '@angular/core';
import { MenuOption } from './interfaces/menu-option.interface';
import { OseSession } from '@ose/commons/services';
import { UserRol } from '@ose/commons/models';
import { Router } from '@angular/router';

@Injectable()
export class AdminPresenter {

  get name() {
    return this.session.user.fullName;
  }

  get menuOpts(): MenuOption[] {
    return this.allMenuOpts.filter(option => option.roles.includes(this.session.user.perfil_id));
  }

  constructor(
    private session: OseSession,
    private router: Router
  ) { }

  closeSession() {
    this.session.destroy();
    this.router.navigateByUrl('/');
  }
  
  private allMenuOpts: MenuOption[] =  [
    { title: 'Inicio', icon: 'bookmark', url: '/administrador', roles: [ UserRol.admin, UserRol.admin ] },
    { title: 'Configuratión', icon: 'bookmark', url: '/administrador/configuration', roles: [ UserRol.admin ] },
    { title: 'Usuarios', icon: 'bookmark', url: '/administrador/users', roles: [ UserRol.admin ] },
    { title: 'Locales', icon: 'bookmark', url: '/administrador/local', roles: [ UserRol.admin ] },
    // { title: 'Comprovantes', icon: 'bookmark', url: '/administrador/document', roles: [ UserRol.admin ] } ,   
    { title: 'Entidades', icon: 'bookmark', url: '/administrador/entiti', roles: [ UserRol.admin ] },
    { title: 'Comprobantes', icon: 'bookmark', url: '/administrador/comprobante', roles: [ UserRol.admin ] },    
    { title: 'Cátalogo', icon: 'bookmark', url: '/administrador/catalogo', roles: [ UserRol.admin ] },
  ];
}
