import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioI } from 'src/app/modelos/usuario.interface';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  inicioSesionForm: FormGroup;

  constructor(private api:ApiService) { 
    this.inicioSesionForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      clave: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(): void {}

  onSubmit(usuario: UsuarioI){
    console.log(usuario);
    this.api.iniciarSesion(usuario).subscribe(data =>{
      console.log(data);
    });
  }

  get email () { return this.inicioSesionForm.get('email'); }
  get clave () { return this.inicioSesionForm.get('clave'); }

}
