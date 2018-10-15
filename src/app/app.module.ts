// Modulos
import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpClientModule }       from '@angular/common/http';
import { NgbModule }              from '@ng-bootstrap/ng-bootstrap';

// Componentes
import { AppComponent }           from './app.component';

// Servicios
import { CamareroService}         from './services/camarero.service';
import { PedidoService}           from './services/pedido.service';
import { ProductoService}         from './services/producto.service';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [CamareroService, ProductoService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
