import { AfterViewInit, Component } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-grafico-mapa',
  templateUrl: './grafico-mapa.component.html',
  styleUrls: ['./grafico-mapa.component.css']
})
export class GraficoMapaComponent implements AfterViewInit {

  private map: any;
  private statesData: any = [{
    "type": "Feature",
    "properties": {
      "name": "Coors Field",
      "amenity": "Baseball Stadium",
      "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-33.45332785, -70.6618948406103]
    }
  }];

  constructor() { }

  private initMap(): void {
    console.log("initMap");
    let geojson = L.geoJSON(this.statesData, {
      pointToLayer: this.pointToLayer.bind(this),
      onEachFeature: this.onEachFeature.bind(this)
    });

    this.map = L.map('map').setView([-33.45332785, -70.6618948406103], 12);
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

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
    return L.marker(latlng);
  }

  private onEachFeature(feature: any, layer: any): void {
    layer.on({
      click: function (e: any) {
        console.log("Punto clickeado", e.target);
      }
    });
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    this.initMap();
  }
}
