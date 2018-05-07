import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

//Servicio implementado para la autentificacion de los usuarios
import { AuthService } from '../../servicios/auth.service'

//Servicio implementado para conectarse a la base de datos
import { DatabaseService } from '../../servicios/database.service'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  //Form
  public email: string;
  public pass: string;

  //isLogin
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuatio: string;

  public imgLogo: any;
  public imgIrrepservices: any;

  constructor(
    public authService: AuthService,
    public router: Router,
    public databaseService: DatabaseService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {

      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.email = auth.email;
        this.router.navigate(['/mapa']);
      } else {
        this.isLogin = false;
        let imagenesObservable = this.databaseService.getData('/imgLogin');
        imagenesObservable.forEach(item => {
          this.imgLogo = item[1];
          this.imgIrrepservices = item[0];
          console.log(item[0]);
        });
      }
    });
  }

  OnSubmitLoginUser() {
    this.authService.loginEmail(this.email, this.pass)
      .then((res) => {
        this.router.navigate(['/mapa']);
      }).catch((err) => {
        console.log(err);
        
      });
  }



}
