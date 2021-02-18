import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronic-receipt',
  templateUrl: './electronic-receipt.component.html',
  styleUrls: ['./electronic-receipt.component.scss']
})
export class ElectronicReceiptComponent implements OnInit {
  filterCliente: any;
  selectCliente: string;
  serie: any[];
  selectedSerieCode:string;
  moneda: any[];
  selectedMoedaCode:string;
  checked:boolean;
  checked1:boolean;
  checked2:boolean = true;
  checked3:boolean;
  
  constructor() { }

  ngOnInit(): void {
    this.serie = [
      {name: 'FFF1', code:'cod1'   }
    ]
    this.moneda = [
      {name: 'S/.', code:'cod1'},
      {name: 'US$.', code:'cod2'},
      {name: '€', code:'cod3'}
    ]
  }

}
