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
import { AltaProductoComponent }              from './components/alta_producto/alta.producto.component';
import { ListadoProductosPaginadoComponent }  from './components/listado_productos/listado.productos.paginado.component';

// Servicios
import { CamareroService }                    from './services/camarero.service';
import { PedidoService }                      from './services/pedido.service';
import { ProductoService }                    from './services/producto.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ListadoCamarerosComponent,
    ListadoProductosPaginadoComponent,
    AltaProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CamareroService, ProductoService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
