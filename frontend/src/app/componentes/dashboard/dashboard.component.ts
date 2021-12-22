import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nombreUsuario: string;
  seccionActiva: number;

  constructor(private api:ApiService) { 
    this.nombreUsuario = this.api.getCurrentUser().email;
    this.seccionActiva = 1;
  }

  ngOnInit(): void {
  }

  onCerrarSesion(): void {
    this.api.cerrarSesion();
  }

  onClickSeccion(event: any): void {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    switch(value) { 
      case "user": { 
        this.seccionActiva = 2;
        break; 
      } 
      case "room": { 
        this.seccionActiva = 3;
        break; 
      } 
      case "module": { 
        this.seccionActiva = 4;
        break; 
      }
      case "class": { 
        this.seccionActiva = 5;
        break;  
      } 
      case "subscription": { 
        this.seccionActiva = 6;
        break;
      }
      case "event": { 
        this.seccionActiva = 7;
        break; 
      }
      case "career": { 
        this.seccionActiva = 8;
        break;  
      } 
      case "sede": { 
        this.seccionActiva = 9;
        break;
      } 
      default: { 
        this.seccionActiva = 1;
        break; 
      } 
   } 
  }
  get seccion () { return this.seccionActiva; }
}
