import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

//Ng Boostrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//Envoriment
import { environment } from '../environments/environment';
//Services
import { AuthService } from './servicios/auth.service'
import { DatabaseService } from './servicios/database.service'
//Componentes
import { AppComponent } from './app.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { MapaPageComponent } from './componentes/mapa-page/mapa-page.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { EmpresasPageComponent } from './componentes/empresas-page/empresas-page.component';
import { EstadisticasPageComponent } from './componentes/estadisticas-page/estadisticas-page.component';
import { UsuariosPageComponent } from './componentes/usuarios-page/usuarios-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MapaPageComponent,
    NavBarComponent,
    NotFoundPageComponent,
    EmpresasPageComponent,
    EstadisticasPageComponent,
    UsuariosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCJXILj9GFk6hhFMAy4MmkfqZfiRvD12jQ'
    })
  ],
  providers: [
    AuthService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
