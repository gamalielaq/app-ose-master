import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  fomatFacturas: any[];
  selectFormatFactura: string;
  checked: boolean;
  constructor() { }

  ngOnInit() {
    this.fomatFacturas = [
      {name: 'A4', cod: 'cod1'},
      {name: 'A5', cod: 'cod2'},
      {name: 'Tamaño Ticket', cod: 'cod3'}
    ]
  }

}
