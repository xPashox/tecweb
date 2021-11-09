import { Injectable } from '@angular/core';

import { UsuarioI } from '../modelos/usuario.interface';
import { RespuestaApiI } from '../modelos/respuesta-api.interface';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi: string = "http://localhost:4000/";

  constructor(private http:HttpClient) { }

  iniciarSesion(usuario: UsuarioI) : Observable<RespuestaApiI> {
    let ruta = this.urlApi + "autenticar";
    return this.http.post<RespuestaApiI>(ruta, usuario);
  }
}
