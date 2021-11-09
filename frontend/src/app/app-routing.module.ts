import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio-sesion', pathMatch: 'full'},
  {path:'inicio-sesion', component: InicioSesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const componentesEnrutamiento = [
  InicioSesionComponent
]
