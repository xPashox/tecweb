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

  inicioSesionForm = new FormGroup({
    correo: new FormControl('', Validators.required),
    contrasenia: new FormControl('', Validators.required)
  })

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(usuario: UsuarioI){
    console.log(usuario);
    this.api.iniciarSesion(usuario).subscribe(data =>{
      console.log(data);
    });
  }

}
