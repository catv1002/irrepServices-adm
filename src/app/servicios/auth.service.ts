import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  //Registar usuarios
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  //Login Usuario
  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(
          userData => resolve(userData),
          err => reject(err));
    });
  }
  //Cerrrar sesión
  logout() {
    return this.afAuth.auth.signOut();
  }

  //Traer datos de usuario logueado
  getAuth(){
    return this.afAuth.authState.map(auth => auth)
  }
}
