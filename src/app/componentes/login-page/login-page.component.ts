import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  //Form
  public email:string;
  public pass:string;

  //isLogin
  public isLogin:boolean;
  public nombreUsuario:string;
  public emailUsuatio:string;

  //imagenes de la db
  imagenesObservable: Observable<any[]>;


  constructor(
    public authService: AuthService,
    public router:Router,
    public db:AngularFireDatabase
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth=>{
      if(auth){
        this.isLogin=true;
        this.nombreUsuario=auth.displayName;
        this.email=auth.email;
        this.router.navigate(['/mapa']);
      }else{
        this.isLogin=false;
        this.imagenesObservable= this.getImages('/imagenes');
      }
    })
  }

  getImages(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  OnSubmitLoginUser() {
    this.authService.loginEmail(this.email,this.pass)
    .then((res)=>{
      this.router.navigate(['/mapa']);
    }).catch((err)=>{
      console.log(err);
      this.router.navigate(['/login']);
    });
  }



}
