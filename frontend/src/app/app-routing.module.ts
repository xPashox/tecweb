import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

//Componentes
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { CheckInicioSesionGuard } from './guards/check-inicio-sesion.guard';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'inicio-sesion',
    pathMatch: 'full'
  },
  {
    path:'inicio-sesion',
    component: InicioSesionComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CheckInicioSesionGuard]
  },
  { 
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const componentesEnrutamiento = [
  InicioSesionComponent
]
