import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { PorfolioComponent } from './porfolio/porfolio.component';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'porfolio', component:PorfolioComponent},
  {path:'', redirectTo:'porfolio', pathMatch:'full'},
  {path:'mensajes', component:MensajesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
