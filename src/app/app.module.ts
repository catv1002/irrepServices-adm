import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { MapaPageComponent } from './componentes/mapa-page/mapa-page.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MapaPageComponent,
    NavBarComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
