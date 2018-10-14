// Modulos

import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpClientModule }       from '@angular/common/http';

// Componentes

import { AppComponent } from './app.component';

// Servicios

import { CamareroService} from './services/camarero.service';















import { ProductoService} from './services/producto.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CamareroService, ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
