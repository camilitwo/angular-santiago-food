import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-landing-locat',
  templateUrl: './landing-locat.component.html',
  styleUrls: ['./landing-locat.component.css']
})
export class LandingLocatComponent implements AfterViewInit {

  @ViewChild('myChart') chartContainer: ElementRef | undefined;
  chartBar: any;

  constructor() {
  }


  ngAfterViewInit(): void {
    const ctx = this.chartContainer?.nativeElement.getContext('2d');

    this.chartBar = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Alimentación', 'Transporte', 'Saúde', 'Lazer', 'Outros'],
        datasets: [
          {
            label: 'Gastos por categoría',
            data: [5, 3, 4, 7, 2],
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#ff5733', '#ffcc33'], // Colores de las barras
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Valor (R$)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Categoría'
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    });

  }
}
