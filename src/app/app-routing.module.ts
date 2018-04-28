import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmpresasPageComponent} from './componentes/empresas-page/empresas-page.component'
import {EstadisticasPageComponent} from './componentes/estadisticas-page/estadisticas-page.component'
import {LoginPageComponent} from './componentes/login-page/login-page.component'
import {MapaPageComponent} from './componentes/mapa-page/mapa-page.component'
import {NotFoundPageComponent} from './componentes/not-found-page/not-found-page.component'
import {UsuariosPageComponent} from './componentes/usuarios-page/usuarios-page.component'

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'usuarios',component:UsuariosPageComponent},
  {path:'mapa',component:MapaPageComponent},
  {path:'empresas',component:EmpresasPageComponent},
  {path:'estadisticas',component:EstadisticasPageComponent},
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
