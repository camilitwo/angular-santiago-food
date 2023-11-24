import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.css']
})


export class ChartDoughnutComponent {

  title = 'ng-chart';
  chart: any = [];

  constructor() {}

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['China', 'Mexicana', 'Hamburguesas', 'Completos', 'Peruana', 'Italiana'],
        datasets: [
          {
            label: 'Cantidad de pedidos',
            data: [12, 19, 35, 5, 2, 3],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Tipos de comida'
          }
        }
      },
    });
  }
}
