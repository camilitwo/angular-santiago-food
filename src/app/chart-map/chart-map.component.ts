import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-chart-map',
  templateUrl: './chart-map.component.html',
  styleUrls: ['./chart-map.component.css']
})
export class ChartMapComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    this.initMap();
  }

  private map: any;
  private statesData: any = [
    {
      "type": "Feature",
      "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-33.356280, -70.740534]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Some Location",
        "amenity": "Some Amenity",
        "popupContent": "Some information about this location."
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-33.452555275566716, -70.66077511126346]
      }
    
  }];

  initMap() {
    console.log("initMap");
    let geojson = L.geoJSON(this.statesData, {
      pointToLayer: this.pointToLayer.bind(this.statesData),
      onEachFeature: this.onEachFeature.bind(this)
    });

    this.map = L.map('map').setView([-33.45332785, -70.6618948406103], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>'
    }).addTo(this.map);

    let info: any;

    info = new L.Control();

    info.onAdd = function () {
      (this as any)._div = L.DomUtil.create("div", "info");
      (this as any).update();
      return (this as any)._div;
    };

    info.update = function (props: any) {
      (this as any).innerHTML =
        "<h4>Pedidos por zona</h4>" +
        (props ? "<b>" + props.name + "</b><br />" : "");
    };

    info.addTo(this.map);
    geojson.addTo(this.map);
  }

  private pointToLayer(feature: any, latlng: any): any {
    // Puedes personalizar el icono aquí
    const customIcon = L.icon({
      iconUrl: '/assets/icons8-google-maps-nuevo-100.png',
      iconSize: [40, 61], // Tamaño del icono
      iconAnchor: [30, 41], // Punto de anclaje del icono (la punta del icono)
      popupAnchor: [10, -34] // Punto de anclaje del popup del icono (relativo al icono)
    });
  
    console.log("Feature:", feature);
    console.log("Coordinates:", latlng);
    // Crear el marcador con el icono personalizado
    return L.marker([-33.356280, -70.740534], { icon: customIcon });
  }


  private onEachFeature(feature: any, layer: any): void {
    layer.on({
      click: function (e: any) {
        console.log("Punto clickeado", e.target);
      }
    });
  }

}
