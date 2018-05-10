import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class DatabaseService {

  constructor(
    public db: AngularFireDatabase
  ) { }

  getData(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  addTarget(title,latitud,longitud,direccion,barrio,ciudad,pais){
    var postData = {
      title: title,
      lat: latitud,
      lng: longitud,
      dir:direccion,
      neighborhood:barrio,
      city:ciudad,
      country:pais,
      status: false,
      capacity: 0
    };
    this.db.list('/cubes').push(postData);
  
  }
}
