import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nombreUsuario: string;

  constructor(private api:ApiService) { 
    const decodedToken = helper.decodeToken(this.api.leerToken());
    this.nombreUsuario = decodedToken.email;
  }

  ngOnInit(): void {
  }

  onCerrarSesion(): void {
    this.api.cerrarSesion();
  }
}
