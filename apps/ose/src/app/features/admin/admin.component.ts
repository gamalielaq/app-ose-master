import { BreakpointObserver } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminPresenter } from './admin.presenter';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [AdminPresenter]
})
export class AdminComponent {
  
  isSmallScreen: boolean;
  constructor(
    public presenter: AdminPresenter,
    private router: Router,
    private location: Location,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe('(max-width: 720px)').subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }

  logout() {
    this.presenter.closeSession();
    this.router.navigateByUrl('/autenticacion/ingresar');
  }
  back() {
    this.location.back();
  }
}
