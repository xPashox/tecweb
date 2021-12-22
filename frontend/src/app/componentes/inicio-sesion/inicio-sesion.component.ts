import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioI } from 'src/app/modelos/usuario.interface';
import { ApiService } from '../../servicios/api.service';
import { Md5 } from 'ts-md5/dist/md5';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  inicioSesionForm: FormGroup;

  constructor(private api:ApiService, private router: Router, private toastr: ToastrService) { 
    this.inicioSesionForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      clave: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(): void {
    this.api.usuarioLoggeado.pipe(first()).subscribe((usuarioLoggeado) => {
      if(usuarioLoggeado){
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  onSubmit(usuario: UsuarioI){
    const md5 = new Md5();
    const infoUsuario: UsuarioI = {email: usuario.email, clave: (md5.appendStr(usuario.clave).end()).toString()};
    this.api.iniciarSesion(infoUsuario).subscribe(
      (respuesta) => {
        if(respuesta && respuesta.success){
          this.router.navigateByUrl('/dashboard');
        }
      },
      (error) => {
        if(error && !error.success){
          this.toastr.error('La cuenta ingresada no existe', 'Error');
        }
      }
    );
  }

  get email () { return this.inicioSesionForm.get('email'); }
  get clave () { return this.inicioSesionForm.get('clave'); }

}
