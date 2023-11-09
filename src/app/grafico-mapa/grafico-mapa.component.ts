import { OnInit, Component, AfterViewInit } from '@angular/core';
// @ts-ignore
import * as L from 'leaflet';
@Component({
  selector: 'app-grafico-mapa',
  templateUrl: './grafico-mapa.component.html',
  styleUrls: ['./grafico-mapa.component.css']
})
export class GraficoMapaComponent implements AfterViewInit {
  constructor() { }

  private map: any;
  private statesData: any = [ {
    "type": "Feature",
    "properties": {
      "density": 100,
      "name": "Santiago"
    },
      "geometry": {
        "type": "Polygon",
          "coordinates": [
            [
              [
                -70.6666667,
                -70.6666667
              ]
            ]
          ]
      }
  }];



  private initMap(): void {
    let geojson: L.GeoJSON;
    this.map = L.map('map').setView([-33.45332785, -70.6618948406103], 12);
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, \' +\n' +
          '                \'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, \' +\n' +
          '                \'Imagery © <a href="http://mapbox.com">Mapbox</a>\',\n' +
          '            id: \'examples.map-i875mjb7'
    });

    tiles.addTo(this.map);

    let info;

    info = new L.Control();

    info.onAdd = function () {
      this._div = L.DomUtil.create("div", "info");
      this.update();
      return this._div;
    };

    info.update = function (props: any) {
      this._div.innerHTML =
        "<h4>Pedidos por zona</h4>" +
        (props ? "<b>" + props.nom + "</b><br />" : "");
    };


      info.update = function style(feature: { properties: { count_: any; }; }) {
          function getColor(d: any) {
              return d > 1000 ? '#800026' :
                  d > 500  ? '#BD0026' :
                      d > 200  ? '#E31A1C' :
                          d > 100  ? '#FC4E2A' :
                              d > 50   ? '#FD8D3C' :
                                  d > 20   ? '#FEB24C' :
                                      d > 10   ? '#FED976' :
                                          '#FFEDA0';
          }

          return {
            fillColor: getColor(feature.properties.count_),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }




    info.addTo(this.map);
    geojson(this.statesData).addTo(this.map);
  }
  ngAfterViewInit(): void {
    this.initMap();

  }
}
