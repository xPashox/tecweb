import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../servicios/api.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckInicioSesionGuard implements CanActivate {
  constructor(private api:ApiService){}

  canActivate() : Observable<boolean> {
    return this.api.usuarioLoggeado.pipe(
      take(1),
      map((usuarioLoggeado: boolean) => usuarioLoggeado));
  }
}
