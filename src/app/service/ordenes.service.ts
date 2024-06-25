import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  private API_ORDENES = 'http://localhost:8080/ordenes';

  constructor(private http: HttpClient) { }

  ///LEER - GET
  getNosotros(): Observable<any> {
    return this.http.get(this.API_ORDENES)
  }
 
  getNosotrosID(id: any): Observable<any> {
    return this.http.get(`${this.API_ORDENES}/${id}`)
  }

  ///GUARDAR - POST
  postNosotros(orden: JSON): Observable<any> {
    return this.http.post(this.API_ORDENES,orden )
  }

  ///ACTUALIZAR - PUT  
  putNosotros(orden: any): Observable<any> {
    return this.http.put(`${this.API_ORDENES}/${orden.id}`, orden)
  }

  /////ELIMINAR DELETE
  deleteNosotrosID(id: any): Observable<any> {
    return this.http.delete(` ${this.API_ORDENES}/${id}`)
  }
}
