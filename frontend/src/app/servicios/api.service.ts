import { Injectable } from '@angular/core';

import { UsuarioI } from '../modelos/usuario.interface';
import { UsuarioRolI } from '../modelos/usuario-rol.interface';
import { RespuestaApiI } from '../modelos/respuesta-api.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi: string = 'http://localhost:4000/';
  usuarioLoggeado = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient, private router: Router) { 
    this.checkToken();
  }

  obtenerUsuarioLoggeado(): Observable<boolean> {
    return this.usuarioLoggeado.asObservable();
  }

  iniciarSesion(usuario: UsuarioI) : Observable<RespuestaApiI | void> {
    let ruta = this.urlApi + 'usuario/login';
    return this.http.post<RespuestaApiI>(ruta, usuario)
    .pipe(
      map((respuesta: RespuestaApiI) => {
        this.guardarToken(respuesta.trace);
        this.usuarioLoggeado.next(true);
        return respuesta;
      })
    );
  }

  cerrarSesion(): void {
    localStorage.removeItem('token');
    this.usuarioLoggeado.next(false);
    this.router.navigate(['/inicio-sesion']);
  }

  private guardarToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private checkToken(): void{
    const tokenUsuario = this.leerToken();
    const tokenCaduco = helper.isTokenExpired(tokenUsuario);
    tokenCaduco ? this.cerrarSesion() : this.usuarioLoggeado.next(true);
  }

  leerToken(): string {
    return localStorage.getItem('token')!;
  }

  getCurrentUser(): UsuarioRolI {
    const decodeToken = helper.decodeToken(this.leerToken());
    const currentUser: UsuarioRolI = {id: decodeToken.userID, email: decodeToken.email, rol: decodeToken.rol};
    return currentUser;
  }

}
