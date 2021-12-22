import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, componentesEnrutamiento } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RoleDirective } from './directivas/role.directive';
import { AdminUserComponent } from './componentes/admin-user/admin-user.component';
import { AdminDashboardComponent } from './componentes/admin-dashboard/admin-dashboard.component';
import { AdminClassComponent } from './componentes/admin-class/admin-class.component';
import { AdminModuleComponent } from './componentes/admin-module/admin-module.component';
import { AdminCareerComponent } from './componentes/admin-career/admin-career.component';
import { AdminSedeComponent } from './componentes/admin-sede/admin-sede.component';
import { AdminRoomComponent } from './componentes/admin-room/admin-room.component';
import { AdminSubscriptionComponent } from './componentes/admin-subscription/admin-subscription.component';
import { AdminEventComponent } from './componentes/admin-event/admin-event.component';

@NgModule({
  declarations: [
    AppComponent,
    componentesEnrutamiento,
    DashboardComponent,
    RoleDirective,
    AdminUserComponent,
    AdminDashboardComponent,
    AdminClassComponent,
    AdminModuleComponent,
    AdminCareerComponent,
    AdminSedeComponent,
    AdminRoomComponent,
    AdminSubscriptionComponent,
    AdminEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
