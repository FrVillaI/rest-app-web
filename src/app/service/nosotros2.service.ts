import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Nosotros2Service {

  constructor(private http: HttpClient) { }

  private API_NOSOTROS = 'http://localhost:3000/users'

  ///LEER - GET
  getNosotros(): Observable<any> {
    return this.http.get(this.API_NOSOTROS)
  }
 
  getNosotrosID(id: any): Observable<any> {
    return this.http.get(`${this.API_NOSOTROS}/${id}`)
  }

  ///GUARDAR - POST
  postNosotros(persona: JSON): Observable<any> {
    return this.http.post(this.API_NOSOTROS, persona)
  }

  ///ACTUALIZAR - PUT  
  putNosotros(persona: any): Observable<any> {
    return this.http.put(`${this.API_NOSOTROS}/${persona.id}`, persona)
  }

  /////ELIMINAR DELETE
  deleteNosotrosID(id: any): Observable<any> {
    return this.http.delete(` ${this.API_NOSOTROS}/${id}`)
  }
} 
