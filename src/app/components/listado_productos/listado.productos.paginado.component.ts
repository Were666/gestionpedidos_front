import { Component, OnInit }                from '@angular/core';
import { ProductoService }                  from 'src/app/services/producto.service';
import { Pagina }                           from 'src/app/model/pagina';

@Component({
    selector: 'listado-productos-paginado',
    templateUrl: './listado.productos.paginado.component.html',
    styleUrls: ['./listado.productos.paginado.component.css']
  })
export class ListadoProductosPaginadoComponent implements OnInit {

    pagina:Pagina = undefined;
    
    page:number = 1;
    elementosPorPagina:number = 45;

    constructor(private productoService: ProductoService){}

    ngOnInit(): void {
        this.read();    
    }

    read(): void {
        this.productoService.getPage(1,10)
        .subscribe(pagina => {
            this.pagina = pagina;
        });
    }

    setPage(evento): void {
        this.page = evento;
        this.read();
    }
    
}