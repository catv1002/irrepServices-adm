import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-mapa-page',
  templateUrl: './mapa-page.component.html',
  styleUrls: ['./mapa-page.component.scss']
})
export class MapaPageComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;

  latitude: any;
  longitude: any;

  ngOnInit() {
    var mapProp = {
      //center: new google.maps.LatLng(3.353496, -76.5210035),
      center: new google.maps.LatLng(3.3996337417569444, -76.56397538806482),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.map.addListener('click', function (e) {
      console.log(e.latLng.lat[0]);
      console.log(e);
    });

    /*     this.gmapElement.nativeElement.addEventListener('click', function(e) {
       console.log(e.LatLng);
    });*/
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)
  }

  setCenter() {
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
    let location = new google.maps.LatLng(this.latitude, this.longitude);
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });

    console.log(marker);

    marker.addListener('click', this.simpleMarkerHandler);

    marker.addListener('click', () => {
      this.markerHandler(marker);
    });
  }

  simpleMarkerHandler() {
    alert('Simple Component\'s function...');
  }

  markerHandler(marker: google.maps.Marker) {
    alert('Marker\'s Title: ' + marker.getTitle());
  }

  //Pinta el marcador según el radiobutton seleccionado
  placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      animation: google.maps.Animation.DROP
    });

    map.panTo(latLng);
  }
}
