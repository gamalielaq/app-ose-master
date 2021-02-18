import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-local-create',
  templateUrl: './local-create.component.html',
  styleUrls: ['./local-create.component.scss']
})
export class LocalCreateComponent implements OnInit {
  labelolcal: string;
  selectUBigeo: string;
  ubigeo: any;
  checked:boolean;
  selectedocumento: string;
  documento: any[];
  // checked: boolean;
  constructor(
    public _location: Location,
    public route: ActivatedRoute
  ) { }
  

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'edit') {
      this.labelolcal = 'Actualizar Local'
    }else {
      this.labelolcal = 'Nuevo Local'
    }

    this.documento = [
      {name: 'Elegir...', code:'cod0'},
      {name: 'FACTURA ELECTRÓNICA', code:'cod1'},
      {name: 'BOLETA DE VENTA ELECTRÓNICA', code:'cod2'},
      {name: 'NOTA DE CRÉDITO ELECTRÓNICA', code:'cod3'},
      {name: 'NOTA DE DÉBITO ELECTRÓNICA', code:'cod4'},
      {name: 'COMPROBANTE DE RETENCIÓN ELECTRÓNICA', code:'cod5'},
      {name: 'COMPROBANTE DE PERCEPCIÓN ELECTRÓNICA', code:'cod6'},
    ]
  }

}
