import { Component, OnInit } from '@angular/core';
import { User } from 'apps/ose/src/app/core/models/user-table';
// import { DialogService } from 'primeng/dynamicdialog';

// import { UserTable } from './../../../../core/models/user-table';
import { UserService } from './../../../../core/service/user.service';
import { UsersEditComponent } from '../users-edit/users-edit.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  msgs = [];
  users: User;

  constructor(
    public _userService: UserService,
    // private dialogService: DialogService,
  ) { }

  ngOnInit() {
    this._userService.getUserAll().subscribe( res => {
      console.log(res);
      
      this.users = res;
    });

    this.msgs.push({severity: 'warn', summary: 'IMPORTANTE',
      detail: 'Los administradores recibiran las ordenes de pago y facturas enviadas por NUBEFACT'});
  }

  // openDialog(): void {
  //   const ref = this.dialogService.open(UsersEditComponent, {
  //     showHeader: false,
  //     styleClass: '',
  //     width: '50%',
  //     baseZIndex: 10000
  //     // data: multiTable
  //   });
  // }

  // openNewUser() {
  //   const ref = this.dialogService.open(UsersEditComponent, {
  //     showHeader: false,
  //     styleClass: '',
  //     width: '50%',
  //     baseZIndex: 10000
  //     // data: multiTable
  //   });
  // }

}
