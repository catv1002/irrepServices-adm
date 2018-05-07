import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Observable } from 'rxjs/Observable';

//Servicio implementado para conectarse a la base de datos
import { DatabaseService } from '../../servicios/database.service'


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],

})

export class NavBarComponent implements OnInit {

  public imgLogo: any;

  constructor(
    public authService: AuthService,
    public databaseService: DatabaseService
  ) { }

  ngOnInit() {
    let imagenesObservable = this.databaseService.getData('/imgNavbar');
    imagenesObservable.forEach(item => {
      this.imgLogo = item[0];
    });
  }

  onLogout() {
    this.authService.logout();
  }

}
