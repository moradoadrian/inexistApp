import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './shared/registro/registro.component';
import { CurpValidatorComponent } from './pages/curp-validator/curp-validator.component';




const routes: Routes = [
  {path:'', redirectTo:'/iniciar-sesion', pathMatch:'full'},
  {path: 'inicio' ,component:DashboardComponent},
  {path: 'iniciar-sesion' ,component:LoginComponent},
  {path: 'registro',component:RegistroComponent},
  {path: 'valida-curp',component:CurpValidatorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
