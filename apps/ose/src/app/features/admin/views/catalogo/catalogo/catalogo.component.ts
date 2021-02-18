import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  catalogo: any[];
  dropdwunCatalogo: any[];
  seleectCatalogo: string;
  selected: any[];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.catalogo = [
      {
        codigo: '2001',
        descripcion: 'DESCRIPCIÓN DEL SERVICIO',
        unidadMedida: 'ZZ',
        m:'S/',
        ventaValUnitario:'200.0',
        ventaPrecioUnitario:'236.0',
        compraValUnitario:'',
        compraPrecioUnitario:'',
        destacado: 'X',
        tipoAfectacion:'',
        codCategoria:'',
        descripcionCategoria:'SIN CATEGORÍA',
        codProducto:'',
        stock:'0.00'
      },
      {
        codigo: '2002',
        descripcion: 'DESCRIPCIÓN DEL SERVICIO',
        unidadMedida: 'ZZ',
        m:'S/',
        ventaValUnitario:'200.0',
        ventaPrecioUnitario:'236.0',
        compraValUnitario:'',
        compraPrecioUnitario:'',
        destacado: 'X',
        tipoAfectacion:'',
        codCategoria:'',
        descripcionCategoria:'SIN CATEGORÍA',
        codProducto:'',
        stock:'0.00'
      }
    ]
  }
    
  edit() {
    this.router.navigate(['administrador/catalogo/edit'])
  }
  add() {
    this.router.navigateByUrl('administrador/catalogo/create');
  }

}
