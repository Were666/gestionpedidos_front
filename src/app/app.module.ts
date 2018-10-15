// Modulos
import { BrowserModule }                      from '@angular/platform-browser';
import { NgModule }                           from '@angular/core';
import { HttpClientModule }                   from '@angular/common/http';
import { NgbModule }                          from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule}                 from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

// Componentes
import { AppComponent }                       from './app.component';

import { ListadoCamarerosComponent }          from './components/listado_camareros/listado.camareros.component';
import { ListadoProductosPaginadoComponent }  from './components/listado_productos/listado.productos.paginado.component';

// Servicios
import { CamareroService }                    from './services/camarero.service';
import { PedidoService }                      from './services/pedido.service';
import { ProductoService }                    from './services/producto.service';


@NgModule({
  declarations: [
    AppComponent,
    ListadoCamarerosComponent,
    ListadoProductosPaginadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CamareroService, ProductoService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
