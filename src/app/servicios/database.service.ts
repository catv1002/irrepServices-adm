import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';


@Injectable()
export class DatabaseService {

  constructor(
    public db: AngularFireDatabase
  ) { }

  getData(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getKey(listPath): any {
    return this.db.list(listPath).snapshotChanges();

  }

  addTarget(title, latitud, longitud, direccion, barrio, ciudad, pais) {
    let postData = {
      title: title,
      lat: latitud,
      lng: longitud,
      dir: direccion,
      neighborhood: barrio,
      city: ciudad,
      country: pais,
      status: false,
      capacity: 0
    };
    this.db.list('/cubes').push(postData);
  }


  update(listpath:string,datos:any){
    this.db.object(listpath).update(datos);
  }

  delete(listPath: string): void {
    this.db.object(listPath).remove();
  }


}
