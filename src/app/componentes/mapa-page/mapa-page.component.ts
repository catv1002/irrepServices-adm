import { Component, OnInit, ViewChild } from '@angular/core';
import { MouseEvent, MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs/Observable'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Marker } from '../../models/market'
import { DatabaseService } from '../../servicios/database.service';
import { } from '@types/googlemaps';
import { isContext } from 'vm';

declare var google: any;


@Component({
  selector: 'app-mapa-page',
  templateUrl: './mapa-page.component.html',
  styleUrls: ['./mapa-page.component.scss']
})
export class MapaPageComponent implements OnInit {
  @ViewChild('content') content: any;
  @ViewChild('closeBtn') closeBtn: any;

  zoom: number = 15;
  lat: number = 3.353496;
  lng: number = -76.5210035;

  //imagenes de la db
  listTargets: Observable<any[]>;
  listImagenes: any;

  title: string;
  latitud: number;
  longitud: number;
  
  dir: string;
  pais:string;
  ciudad:string;
  barrio:string;


  icon = {
    url: ('../../../assets/img/waste.svg'),
    scaledSize: {
      height: 40,
      width: 20
    }
  };


  constructor(
    public databaseServices: DatabaseService,
    public modalService: NgbModal,
    public mapsAPILoader: MapsAPILoader) {

    // google maps zoom level
    let imagenesObservable = this.databaseServices.getData('/imgMapa');
    let cubesObservable = this.databaseServices.getData('/cubes');
    this.listTargets = cubesObservable;
    this.listImagenes = imagenesObservable;

  }

  mapClicked($event: MouseEvent) {
    this.modalService.open(this.content);
    this.latitud = $event.coords.lat;
    this.longitud = $event.coords.lng;
    this.getAddress();
  }


  addMapa() {
    console.log(this.title);
    console.log(this.latitud);
    console.log(this.longitud);
    console.log(this.dir);
    console.log(this.barrio);
    console.log(this.pais);
    console.log(this.ciudad);

    this.databaseServices.addTarget(this.title, this.latitud, this.longitud, this.dir,this.barrio,this.ciudad,this.pais);
  }

  getAddress() {
    let self = this;
    this.mapsAPILoader.load().then(() => {
      console.log('google script loaded');
      var geocoder = new google.maps.Geocoder();
      var latlng = { lat: parseFloat(this.latitud.toString()), lng: parseFloat(this.longitud.toString()) };
      geocoder.geocode({ 'location': latlng }, function (results, status) {
        
        self.dir = results[0].address_components[1].long_name +" "+results[0].address_components[0].long_name;
        self.pais = results[0].address_components[5].long_name;
        self.barrio = results[1].address_components[0].long_name;
        self.ciudad = results[1].address_components[1].long_name;
        
        console.log(results);
        (<HTMLInputElement>document.getElementById("direccion")).value = this.dir;
      });
    });
  }

  ngOnInit() {
  }

}

