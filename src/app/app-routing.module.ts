import { NgModule }                             from '@angular/core';
import { RouterModule, Routes }                 from '@angular/router';
import { AltaProductoComponent }                from './components/alta_producto/alta.producto.component';
import { ListadoCamarerosComponent }            from './components/listado_camareros/listado.camareros.component';
import { ListadoProductosPaginadoComponent }    from './components/listado_productos/listado.productos.paginado.component';
import { AboutComponent }                       from './components/about/about.component';

const routes: Routes = [

    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'altaproducto', component: AltaProductoComponent },
    { path: 'listadocamareros', component: ListadoCamarerosComponent },
    { path: 'paginaproductos', component: ListadoProductosPaginadoComponent },
//  { path: 'detailsproducto/:id', component: EditProductoComponent },
    { path: '**', component: AboutComponent } //404 todo component
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })

export class AppRoutingModule {}



