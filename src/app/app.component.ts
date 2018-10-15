import { Component, OnInit }          from '@angular/core';
import { CamareroService }            from './services/camarero.service';
import { ProductoService } from './services/producto.service';
import { PedidoService } from './services/pedido.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Atributos que "pintaremos" en el HTML
  camareros;
  productos;
  pedidos;
  pagina;
  
  // En Angular la inyección se lleva a cabo a través del construcor
  constructor(private camareroService: CamareroService,
              private productoService: ProductoService,
              private pedidoService: PedidoService){}

  // Cuando se crea el componente buscamos los datos...
  ngOnInit(){
    this.read();
  }

  read() {
    this.camareroService.getAll().subscribe(camareros => {
      this.camareros = camareros;
    });

    this.pedidoService.getAll().subscribe(pedidos => {
      this.pedidos = pedidos;
    });
    /*
    this.productoService.getPage(1,10).subscribe(pagina => {
      this.pagina = pagina;
    });
    */
  }
}