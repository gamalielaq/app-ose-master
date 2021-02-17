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
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
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
