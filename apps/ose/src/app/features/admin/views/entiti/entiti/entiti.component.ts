import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entiti',
  templateUrl: './entiti.component.html',
  styleUrls: ['./entiti.component.scss']
})
export class EntitiComponent implements OnInit {
  cities: City[];
  selectedCity: City;
  labelentiti: string;
  @Input() action : string; 

  constructor(
    private location: Location,
    private route: ActivatedRoute
  ) {
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id === 'edit') {
      this.labelentiti = 'Actualizar Entidad'
    }else {
      this.labelentiti = 'Nueva Entidad'
    }

    console.log(id);
    
  }

  ngOnInit(): void {
    this.cities = [
      {name: '6 RUC - REGISTRO ÚNICO DE CONTRIBUYENTE', code: 'co1'},
      {name: '1 DNI - DOC. NACIONAL DE IDENTIDAD', code: 'co2'},
      {name: '- VARIOS - VENTAS MENORES A S/.700.00 Y OTROS', code: 'co3'},
      {name: '4 CARNET DE EXTRANJERÍA', code: 'co4'},
      {name: '7 PASAPORTE', code: 'co5'},
  ];
  }

  regresar() {
    this.location.back();
  }
}

interface City {
  name: string,
  code: string
}
