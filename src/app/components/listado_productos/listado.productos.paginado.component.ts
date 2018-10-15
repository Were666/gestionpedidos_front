import { Component, OnInit }                from '@angular/core';
import { NgModule }                         from '@angular/core';
import { ProductoService }                  from 'src/app/services/producto.service';
import { Pagina }                           from 'src/app/model/pagina';

@Component({
    selector: 'listado-productos-paginado',
    templateUrl: './listado.productos.paginado.component.html',
    styleUrls: ['./listado.productos.paginado.component.css']
  })
export class ListadoProductosPaginadoComponent implements OnInit {

    pagina:Pagina;

    page:number = 4;
    collectionSize:number = 10;

    constructor( private productoService: ProductoService){}

    ngOnInit(): void {
        this.read();    
    }

    read(): void {
        this.productoService.getPage(this.page, this.collectionSize).subscribe(pagina => {
            this.pagina = pagina;
        });
    }

    hazEsto(datos): void {
        this.read();
    }
    
}