import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { UserService } from './../../../../core/service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from 'apps/ose/src/app/core/models/user-table';
import { MessageService } from 'primeng/api';
// import { User } from '@ose/commons/models';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit, OnDestroy {
  display: boolean = true;
  private unsbscribeAll: Subject<any> = new Subject<any>();
  configuration = [true, false, false, true];

  form: FormGroup;
  type: string;
  users: User;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public _userService: UserService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.type = this.config.data.type;

    if (this.type === 'edit') {
      this.users = this.config.data.user;
      this.uploadData(this.users);
    }
    this.route.params.pipe(
      takeUntil(this.unsbscribeAll)
    ).subscribe(params => {
      // this.userService.getUserByPhone(params.phone);
    });

  }

  ngOnDestroy(): void {
    this.unsbscribeAll.next();
    this.unsbscribeAll.complete();
  }



  createForm() {
    this.form = this.fb.group({
      ContribuyenteId: [1, []],
      PerfilId: [1, []],
      UsuarioNickname: ['', [Validators.required]],
      UsuarioPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      UsuarioCorreo: ['', [Validators.required]],
      UsuarioTelefono: ['', []],
      UsuarioNombre: ['', [Validators.required]],
    })
  }

  save() {

    this.config.data = this.form.getRawValue();
    if (this.form.valid) {
      this._userService.process(this.config.data, this.type).then(res => {
        this.showViaService('Usuario Guardado con Éxito', 'success');
        this.ref.close();
        this._userService.getUserAll().subscribe();
      }).catch(err => {
        console.log(err);
      });
    }else {
      this.form.markAllAsTouched()
    };

  }

  uploadData(user: User) {
    this.form.setValue(
      {
        ContribuyenteId: 1,
        PerfilId: 1,
        UsuarioNickname: user.usuariO_NICKNAME,
        UsuarioPassword: '',
        confirmPassword: '',
        UsuarioCorreo: user.usuariO_CORREO,
        UsuarioTelefono: user.usuariO_TELEFONO,
        UsuarioNombre: ''
      }
    )
  }

  showViaService(message: string, color: string) {
    this.messageService.add({
      severity:color, summary:'', detail:message
    }); 
  }
}
