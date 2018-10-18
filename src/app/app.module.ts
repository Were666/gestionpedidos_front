// Modulos
import { BrowserModule }                      from '@angular/platform-browser';
import { NgModule }                           from '@angular/core';
import { HttpClientModule }                   from '@angular/common/http';
import { NgbModule }                          from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule}                 from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule }                   from './app-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ServiceWorkerModule }                from '@angular/service-worker';

// Componentes
import { AppComponent }                       from './app.component';
import { ListadoCamarerosComponent }          from './components/listado_camareros/listado.camareros.component';
import { AltaProductoComponent }              from './components/alta_producto/alta.producto.component';
import { ListadoPedidosComponent }            from './components/listado-pedidos/listado-pedidos.component';
import { ListadoProductosPaginadoComponent }  from './components/listado_productos/listado.productos.paginado.component';
import { AboutComponent }                     from './components/about/about.component';

// Servicios
import { CamareroService }                    from './services/camarero.service';
import { PedidoService }                      from './services/pedido.service';
import { ProductoService }                    from './services/producto.service';

// Environment?
import { environment }                        from '../environments/environment';
import { FichaProductoComponent } from './components/ficha-producto/ficha-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoCamarerosComponent,
    ListadoProductosPaginadoComponent,
    AltaProductoComponent,
    AboutComponent,
    ListadoPedidosComponent,
    FichaProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    AppRoutingModule,

    ReactiveFormsModule, // WTF?
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }) // WTF?
  ],
  providers: [CamareroService, ProductoService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
