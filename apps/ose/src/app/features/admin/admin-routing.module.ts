import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { WorkshopsComponent } from './views/workshops/workshops.component';
import { WorkshopCreateView } from './views/workshop-create/workshop-create.view';
import { WorkshopUpdateView } from './views/workshop-update/workshop-update.view';
import { InstructorsComponent } from './views/instructors/instructors.component';
import { OseRolesGuard } from '@ose/commons/guards';
import { UserRol } from '@ose/commons/models';
import { DashboardView } from './views/dashboard/dashboard.view';

import { UsersComponent } from './views/users/users.component';
import { UsersEditComponent } from './views/users-edit/users-edit.component';
import { ReceiptComponent } from './views/receipt/receipt.component';
import { ConfigurationComponent } from './views/configuration/configuration.component';
import { LocalComponent } from './views/local/local/local.component';
import { DocumentComponent } from './views/document/document.component';
import { ApiComponent } from './views/api/api.component';
import { EntitiComponent } from './views/entiti/entiti/entiti.component';
import { EntitiListComponent } from './views/entiti/entiti-list/entiti-list.component';
import { ComprobanteComponent } from './views/comprobante/comprobante/comprobante.component';
import { ElectronicReceiptComponent } from './views/comprobante/electronic-receipt/electronic-receipt.component';
import { LocalCreateComponent } from './views/local/local-create/local-create.component';
import { CatalogoComponent } from './views/catalogo/catalogo/catalogo.component';
import { CatalogoCreateComponent } from './views/catalogo/catalogo-create/catalogo-create.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardView },
      { path: 'talleres', component: WorkshopsComponent },
      { path: 'talleres/nuevo', component: WorkshopCreateView },
      { path: 'talleres/actualizar/:id', component: WorkshopUpdateView },
      {
        path: 'instructores',
        canActivate: [ OseRolesGuard ],
        data: { roles: [ UserRol.admin ] },
        component: InstructorsComponent
      },
      {
        path: 'users', component: UsersComponent
      },
      {
        path: 'users/:phone', component: UsersEditComponent
      },
      {
        path: 'receipt', component: ReceiptComponent
      },
      {
        path: 'configuration', component: ConfigurationComponent
      },
      {
        path: 'local', component: LocalComponent
      },
      {
        path: 'local/:id', component: LocalCreateComponent
      },
      {
        path: 'entiti', component: EntitiListComponent
      },
      {
        path: 'entiti/:id', component: EntitiComponent
      },
      {
        path: 'comprobante', component: ComprobanteComponent
      },
      {
        path: 'comprobante/:id', component: EntitiComponent
      },
      {
        path: 'catalogo', component: CatalogoComponent
      },
      {
        path: 'catalogo/:id', component: CatalogoCreateComponent
      },
      {
        path: 'comprobante/emit/:id', component: ElectronicReceiptComponent
      },
      {
        path: 'document', component: DocumentComponent
      },
      {
        path: 'api', component: ApiComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
