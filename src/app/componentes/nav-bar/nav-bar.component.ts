import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../servicios/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  
})

export class NavBarComponent implements OnInit {

  //imagenes de la db
  imagenesObservable: Observable<any[]>;
  logo:string

  constructor(
    public authService: AuthService,
    public db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.imagenesObservable = this.getImages('/imagenes');
    this.logo = this.imagenesObservable[0];

  }

  getImages(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
  onLlaogout() {
    this.authService.logout();
  }

}
