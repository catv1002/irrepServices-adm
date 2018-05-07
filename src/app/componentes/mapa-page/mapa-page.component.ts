import { Component, OnInit, ViewChild } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Observable } from 'rxjs/Observable'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DatabaseService } from '../../servicios/database.service';


@Component({
  selector: 'app-mapa-page',
  templateUrl: './mapa-page.component.html',
  styleUrls: ['./mapa-page.component.scss']
})
export class MapaPageComponent implements OnInit {
  @ViewChild('content') content: any;
  // google maps zoom level
  zoom: number = 15;
  lat: number = 3.353496;
  lng: number = -76.5210035;

  //imagenes de la db
  imagenesObservable: Observable<any[]>;
  closeResult: string;


  constructor(
    public databaseServices: DatabaseService,
    private modalService: NgbModal
  ) {
    this.imagenesObservable = this.databaseServices.getData('/imgMapa');
  }
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });

    this.modalService.open(this.content);
    console.log("latitud " + $event.coords.lat);
    console.log("Longitud " + $event.coords.lng);

  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ]

  ngOnInit() {
  }
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
