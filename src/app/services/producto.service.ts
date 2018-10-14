import { Injectable }       from "@angular/core";
import { HttpClient }       from '@angular/common/http';
import { Observable }       from "rxjs";
import { Producto }         from "../model/producto";

@Injectable()
export class ProductoService {

    URL = 'http://localhost:8080/productos';

    constructor(private http:HttpClient){

    }

    getAll(): Observable<Producto> {
        return this.http.get<Producto>(this.URL);
    }
}