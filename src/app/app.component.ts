import { Component, OnInit }          from '@angular/core';
import { CamareroService }            from './services/camarero.service';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Atributo (el que "pintaremos" en el HTML)
  camareros;
  productos;
  
  // En Angular la inyección se lleva a cabo a través del construcor
  constructor(private camareroService: CamareroService,
              private productoService: ProductoService){}

  // Cuando se crea el componente buscamos los datos...
  ngOnInit(){
    this.read();
  }

  read() {
    this.camareroService.getAll().subscribe(camareros => {
      this.camareros = camareros;
    });

    this.productoService.getAll().subscribe(productos => {
      this.productos = productos;
    })
  }
}