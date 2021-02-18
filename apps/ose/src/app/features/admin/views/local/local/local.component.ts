import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {
  local: any[]
  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    this.local = [
      {
        codigo: '001',
        descripcion: {
          name: 'LOCAL PRINCIPAL',
          cod: 'CÓD. SUNAT: 0001'
        },
        ubigeo: '000000',
        departamento: '',
        provinvia: '',
        distrito: '',
        direccion: '',
        tipoComprovante: [
          {
            name: 'FACTURA ELECTRÓNICA',
            cod: 'FFF1'
          },
          {
            name: 'NOTA DE CRÉDITO ELECTRÓNICA',
            cod: 'FFF1'
          },
          {
            name: 'NOTA DE DÉBITO ELECTRÓNICA',
            cod: 'FFF1'
          },
          {
            name: 'BOLETA DE VENTA ELECTRÓNICA',
            cod: 'BBB1'
          },
          {
            name: 'NOTA DE CRÉDITO ELECTRÓNICA',
            cod: 'BBB1'
          },
          {
            name: 'NOTA DE DÉBITO ELECTRÓNICA',
            cod: 'BBB1'
          },
          {
            name: 'COMPROBANTE DE RETENCIÓN ELECTRÓNICA',
            cod: 'RRR1'
          },
          {
            name: 'COMPROBANTE DE PERCEPCIÓN ELECTRÓNICA',
            cod: 'PPP1'
          },
          {
            name: 'GUÍA DE REMISIÓN REMITENTE ELECTRÓNICA',
            cod: 'TTT1'
          },
          {
            name: 'FACTURA ELECTRÓNICA [Contingencia]',
            cod: '0001'
          },
          {
            name: 'NOTA DE DÉBITO ELECTRÓNICA [Contingencia]',
            cod: '0001'
          },
          {
            name: 'BOLETA DE VENTA ELECTRÓNICA [Contingencia]',
            cod: '0001'
          },
          {
            name: 'NOTA DE CRÉDITO ELECTRÓNICA [Contingencia]',
            cod: '0001'
          },
          {
            name: 'NOTA DE DÉBITO ELECTRÓNICA [Contingencia]',
            cod: '0001'
          }
        ]
        ,
        offline: 'x'
      }
    ]
  }


  edit() {
    this.router.navigate(['administrador/local/edit'])
  }
  add() {
    this.router.navigateByUrl('administrador/local/create');
  }

}
