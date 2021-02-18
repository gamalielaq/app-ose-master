import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo-create',
  templateUrl: './catalogo-create.component.html',
  styleUrls: ['./catalogo-create.component.scss']
})
export class CatalogoCreateComponent implements OnInit {
  labelCatalogo: string;
  selectCategoria: string;
  categoria: any[];
  checked: boolean;
  constructor(
    public _location: Location,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    if (id === 'edit') {
      this.labelCatalogo = 'Actualizar Catálago'
    }else {
      this.labelCatalogo = 'Nuevo Producto o Servicio'
    }

  }

}
