import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminCommonsModule } from './commons/commons.module';
import { WorkshopsComponent } from './views/workshops/workshops.component';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';
import { InstructorsComponent } from './views/instructors/instructors.component';
import { DashboardView } from './views/dashboard/dashboard.view';

import { UiModule } from './../auth/commons/ui/ui.module';
import { UsersComponent } from './views/users/users.component';
import { UsersEditComponent } from './views/users-edit/users-edit.component';
import { ReceiptComponent } from './views/receipt/receipt.component';
import { ConfigurationComponent } from './views/configuration/configuration.component';
import { LocalComponent } from './views/local/local/local.component';
import { DocumentComponent } from './views/document/document.component';
import { ApiComponent } from './views/api/api.component';

import { SharedModule } from '../../shared/shared.module';
import { MessageService } from 'primeng/api';
import { EntitiComponent } from './views/entiti/entiti/entiti.component'
import { EntitiListComponent } from './views/entiti/entiti-list/entiti-list.component';
import { ComprobanteComponent } from './views/comprobante/comprobante/comprobante.component';
import { ElectronicReceiptComponent } from './views/comprobante/electronic-receipt/electronic-receipt.component';
import { LocalCreateComponent } from './views/local/local-create/local-create.component';
import { CatalogoComponent } from './views/catalogo/catalogo/catalogo.component';
import { CatalogoCreateComponent } from './views/catalogo/catalogo-create/catalogo-create.component'


@NgModule({
  declarations: [
    AdminComponent,
    WorkshopsComponent,
    WorkshopCreateView,
    WorkshopUpdateView,
    InstructorsComponent,
    DashboardView,
    UsersComponent,
    UsersEditComponent,
    ReceiptComponent,
    ConfigurationComponent,
    LocalComponent,
    DocumentComponent,
    ApiComponent,
    EntitiComponent,
    EntitiListComponent,
    ComprobanteComponent,
    ElectronicReceiptComponent,
    LocalCreateComponent,
    CatalogoComponent,
    CatalogoCreateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminCommonsModule,
    UiModule,
    FormsModule,
    SharedModule
  ],
  entryComponents:[UsersEditComponent],
  providers:[MessageService]
})
export class AdminModule { }
