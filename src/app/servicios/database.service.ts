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

  addTarget(title,latitud,longitud,type){
    var postData = {
      title: title,
      lat: latitud,
      lng: longitud,
      type: type,
      status: false,
      capacity: 0
    };
    this.db.list('/cubes').push(postData);
  
  }
}
