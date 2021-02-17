import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [],
  imports: [CommonModule, PrimengModule ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PrimengModule,
  ],
})
export class SharedModule { }
