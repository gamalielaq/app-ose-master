import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { Period, Filter } from '../../../../../core/models/receipt';
import { ReceiptService } from '../../../../../core/service/receipt.service';

@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.component.html',
  styleUrls: ['./comprobante.component.scss']
})
export class ComprobanteComponent implements OnInit {

  items: MenuItem[];
  period: Period[];
  entidad: Period[];
  filterTipo: Filter[];
  selectTipo: string;
  selectEntidad: String;
  comprobanteiList: any[];


  currentDate: Date;
  minDate: Date;
  maxDate: Date
  constructor(
    private _receiptService: ReceiptService,
    private _router: Router,
    private config: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    
    this.filterTipo = this._receiptService.getFilter();

    this.entidad = this._receiptService.getFilter();;

    this.period = this._receiptService.getPeriod();

    this.comprobanteiList = [
      {
        fecha: '08/02/2021',
        tipo: '01',
        serie: 'FFF1',
        num: '1',
        documento: '1078568520',
        denominacion: 'INMOBILIARIA LOS VIRREYES S A',
        m: 'S/',
        tc: '',
        total: '2306.00',
        totalGratuita: '0.00',
        pagado: 'x',
        enviado: 'x',
        leido: 'x',
        imprimir: 'imprimir',
        pdf: 'PDF',
        xml: '',
        cdr: '',
        estado: 'BORRADOR',
      },
      {
        fecha: '08/02/2021',
        tipo: '01',
        serie: 'FFF1',
        num: '1',
        documento: '1078568520',
        denominacion: 'INMOBILIARIA LOS VIRREYES S A',
        m: 'S/',
        tc: '',
        total: '2306.00',
        totalGratuita: '0.00',
        pagado: 'x',
        enviado: 'x',
        leido: 'x',
        imprimir: 'imprimir',
        pdf: 'PDF',
        xml: '',
        cdr: '',
        estado: 'BORRADOR',
      }
    ]

    this.items = [{
      label: '---Selecciona una opcion---',
      icon: '',
      items: [{
        label: 'Emitir Factura Electrónica',
        icon: '',
        command: () => {
          console.log('me diste click');

          this._router.navigate(['administrador/comprobante/emit/receip']);
        }
      },
      {
        label: 'Emitir Boleta de Venta Electrónica',
        icon: '',
        command: () => {
        }
      },
      {
        label: 'Emitir Boleta de Venta Electrónica',
        icon: '',
        command: () => {
        }
      }
      ]
    },
    ];
  }
}
