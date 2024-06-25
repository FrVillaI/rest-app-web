import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private API_NOSOTROS = 'http://localhost:8080/productos';

  constructor(private http: HttpClient) { }

  //LEER - GET
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.API_NOSOTROS);
  }

  getProductosID(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.API_NOSOTROS}/${id}`);
  }

  //GUARDAR - POST
  postProductos(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.API_NOSOTROS, producto);
  }

  //ACTUALIZAR - PUT  
  putProductos(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.API_NOSOTROS}/${producto.productoID}`, producto);
  }

  //ELIMINAR DELETE
  deleteProductosID(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_NOSOTROS}/${id}`);
  }
}
