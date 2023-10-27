import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-landing-locat',
  templateUrl: './landing-locat.component.html',
  styleUrls: ['./landing-locat.component.css']
})
export class LandingLocatComponent implements AfterViewInit {

  @ViewChild('chartContainer') chartContainer: ElementRef | undefined;

  constructor() {
  }


  ngAfterViewInit(): void {
    // Configura tu gráfico de Highcharts aquí
    const options: Highcharts.Options = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Mi gráfico Highcharts'
      },
      series: [{
        type: 'area', // Especifica el tipo de serie, en este caso 'area'
        data: [1, 3, 2, 4, 5]
      }]
    };

    // Crea el gráfico en el elemento chartContainer
    // @ts-ignore
    Highcharts.chart(this.chartContainer.nativeElement, options);
  }
}
