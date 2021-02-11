import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPresenter } from './admin.presenter';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ AdminPresenter ]
})
export class AdminComponent {

  constructor(
    public presenter: AdminPresenter,
    private router: Router
    ) { }
    
  logout() {
    this.presenter.closeSession();
    this.router.navigateByUrl('/autenticacion/ingresar');
  }

}
