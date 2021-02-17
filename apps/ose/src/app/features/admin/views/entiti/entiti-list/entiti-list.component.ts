import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entiti-list',
  templateUrl: './entiti-list.component.html',
  styleUrls: ['./entiti-list.component.scss']
})
export class EntitiListComponent implements OnInit {

  selectedEntitie: string;
  entities: any[];
  entitiList: any[];
  users: any;
  
  action: string;
  
  constructor(
    private router: Router
  ) { 

   
  }
  
  ngOnInit(): void {

    this.entities = [
      {name: 'pedro@gmail.com', code: 'pe'},
      {name: 'pedro@gmail.com', code: 'pe'},
      {name: 'mauel@gmail.com', code: 'CN'},
      {name: 'juan@gmail.com', code: 'ju'},
      {name: 'pedro@gmail.com', code: 'pe'},
      {name: 'oscar@gmail.com', code: 'DE'},
      {name: 'pedro@gmail.com', code: 'pe'},
      {name: 'simon@gmail.com', code: 'si'},
      {name: 'pedro@gmail.com', code: 'pe'},
      {name: 'pedro@gmail.com', code: 'pe'}
  ];

  this.entitiList = [
    {
      tipo: 'RUC',
      numero: '20119272204',
      nombre: 'INMOBILIARIA LOS VIRREYES S A',
      direccion: 'NRO. MC-C INT. LT 5 URB. LOS VIRREYES - TACNA TACNA POCOLLAY',
      email: 'JJ@OUTLOOK.COM	',
      telefono: '988898',
      comprovante: 'VER CPE\'S',
    },
    {
      tipo:'RUC',
      numero:'NUBEFACT SA',
      nombre:'MIRAFLORES',
      direccion:'yosuavirtual@gmail.com	',
      email:'',
      telefono:'',
      comprovante:'VER CPE\'S'
    },
    {
      tipo:'VARIOS',
      numero:'',
      nombre:'VARIOS',
      direccion:'LIMA - PERU	',
      email:'yosuavirtual@gmail.com',
      telefono:'',
      comprovante:'VER CPE\'S'
    }
  ]

  }

  edit() {
    this.router.navigate(['administrador/entiti/edit'])
  }
  add() {
    this.router.navigateByUrl('administrador/entiti/create');
  }

  change() { }
}
