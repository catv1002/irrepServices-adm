import { Component, OnInit, ViewChild } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Observable } from 'rxjs/Observable'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Marker } from '../../models/market'
import { DatabaseService } from '../../servicios/database.service';


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
  listTargets: any;
  listImagenes: any;

  title: string;
  latitud: number;
  longitud: number;

  checkbox = [
    { value: 0, check: true },
    { value: 1, check: true },
    { value: 2, check: true }];


  constructor(
    public databaseServices: DatabaseService,
    private modalService: NgbModal) {
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
  }


  addMapa() {
    console.log(this.title);
    console.log(this.latitud);
    console.log(this.longitud);
    this.checkbox.forEach(element => {
      console.log(element);
      if (element.check) {
        this.databaseServices.addTarget(this.title, this.latitud, this.longitud, element.value);
      }
    });
  }

  ngOnInit() {
  }
}

