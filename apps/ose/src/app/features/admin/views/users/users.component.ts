import { Component, OnInit } from '@angular/core';
import { User } from 'apps/ose/src/app/core/models/user-table';
import { DialogService } from 'primeng/dynamicdialog';

// import { UserTable } from './../../../../core/models/user-table';
import { UserService } from './../../../../core/service/user.service';
import { UsersEditComponent } from '../users-edit/users-edit.component';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [DialogService, ConfirmationService]
})
export class UsersComponent implements OnInit {
  msgs = [];
  users: User;

  constructor(
    public _userService: UserService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    
    this.cargarData();

    this.msgs.push({
      severity: 'warn', summary: 'IMPORTANTE',
      detail: 'Los administradores recibiran las ordenes de pago y facturas enviadas por NUBEFACT'
    });
  }

  newUser(user: User | null, type): void {
    const ref = this.dialogService.open(UsersEditComponent, {
      showHeader: true,
      header: 'Nuevo Usuario',
      styleClass: '',
      width: '60%',
      baseZIndex: 10000,
      data: {
        type: type
      }
    });
  }

  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: '¿Esta Seguro Eliminar este usuario?',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: () => {
        this._userService.deleteUser(user).then( (res : string)  => {
          this.showViaService(res['message'] , 'success');
          this.cargarData();
        });
      },
      reject: () => {
      }
    });
  }

  editUser(user: User, type): void {
    const ref = this.dialogService.open(UsersEditComponent, {
      showHeader: true,
      header: 'Actualizar Usuario',
      styleClass: '',
      width: '60%',
      baseZIndex: 10000,
      data: {
        user: user,
        type: type
      }
    });
  }

  showViaService(message: string, color: string) {
    this.messageService.add({
      severity:color, summary:'', detail:message
    }); 
  }

  cargarData() {
    this._userService.getUserAll().subscribe(res => {
      this.users = res;
    });
  }

}
