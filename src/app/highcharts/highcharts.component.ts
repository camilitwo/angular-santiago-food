import { AfterViewInit, Component, ElementRef } from '@angular/core';

declare var Highcharts: any; // Declaración para evitar errores de TypeScript

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    Highcharts.chart(this.el.nativeElement.querySelector('#container'), {
    chart: {
        type: 'area'
      },
    title: {
      text: 'US and USSR nuclear stockpiles'
    },
    subtitle: {
      text: 'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
      'target="_blank">FAS</a>'
    },
    xAxis: {
      allowDecimals: false,
        accessibility: {
        rangeDescription: 'Range: 1940 to 2017.'
      }
    },
    yAxis: {
      title: {
        text: 'Nuclear weapon states'
      }
    },
    tooltip: {
      pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
      area: {
        pointStart: 1940,
          marker: {
          enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: 'USA',
      data: [
        null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
        1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
        28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
        26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
        23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
        21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
        10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
        5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
        3750, 3708, 3708
      ]
    }, {
      name: 'USSR/Russia',
      data: [null, null, null, null, null, null, null, null, null,
        1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
        3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
        14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
        32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
        32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
        13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
        5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
        4310, 4495, 4477
      ]
    }]
  });

    Highcharts.chart('container2', {
      chart: {
        type: 'column'
      },
      title: {
        align: 'left',
        text: 'Browser market shares. January, 2022'
      },
      subtitle: {
        align: 'left',
        text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Total percent market share'
        }

      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },

      series: [
        {
          name: 'Browsers',
          colorByPoint: true,
          data: [
            {
              name: 'Chrome',
              y: 63.06,
              drilldown: 'Chrome'
            },
            {
              name: 'Safari',
              y: 19.84,
              drilldown: 'Safari'
            },
            {
              name: 'Firefox',
              y: 4.18,
              drilldown: 'Firefox'
            },
            {
              name: 'Edge',
              y: 4.12,
              drilldown: 'Edge'
            },
            {
              name: 'Opera',
              y: 2.33,
              drilldown: 'Opera'
            },
            {
              name: 'Internet Explorer',
              y: 0.45,
              drilldown: 'Internet Explorer'
            },
            {
              name: 'Other',
              y: 1.582,
              drilldown: null
            }
          ]
        }
      ],
      drilldown: {
        breadcrumbs: {
          position: {
            align: 'right'
          }
        },
        series: [
          {
            name: 'Chrome',
            id: 'Chrome',
            data: [
              [
                'v65.0',
                0.1
              ],
              [
                'v64.0',
                1.3
              ],
              [
                'v63.0',
                53.02
              ],
              [
                'v62.0',
                1.4
              ],
              [
                'v61.0',
                0.88
              ],
              [
                'v60.0',
                0.56
              ],
              [
                'v59.0',
                0.45
              ],
              [
                'v58.0',
                0.49
              ],
              [
                'v57.0',
                0.32
              ],
              [
                'v56.0',
                0.29
              ],
              [
                'v55.0',
                0.79
              ],
              [
                'v54.0',
                0.18
              ],
              [
                'v51.0',
                0.13
              ],
              [
                'v49.0',
                2.16
              ],
              [
                'v48.0',
                0.13
              ],
              [
                'v47.0',
                0.11
              ],
              [
                'v43.0',
                0.17
              ],
              [
                'v29.0',
                0.26
              ]
            ]
          },
          {
            name: 'Firefox',
            id: 'Firefox',
            data: [
              [
                'v58.0',
                1.02
              ],
              [
                'v57.0',
                7.36
              ],
              [
                'v56.0',
                0.35
              ],
              [
                'v55.0',
                0.11
              ],
              [
                'v54.0',
                0.1
              ],
              [
                'v52.0',
                0.95
              ],
              [
                'v51.0',
                0.15
              ],
              [
                'v50.0',
                0.1
              ],
              [
                'v48.0',
                0.31
              ],
              [
                'v47.0',
                0.12
              ]
            ]
          },
          {
            name: 'Internet Explorer',
            id: 'Internet Explorer',
            data: [
              [
                'v11.0',
                6.2
              ],
              [
                'v10.0',
                0.29
              ],
              [
                'v9.0',
                0.27
              ],
              [
                'v8.0',
                0.47
              ]
            ]
          },
          {
            name: 'Safari',
            id: 'Safari',
            data: [
              [
                'v11.0',
                3.39
              ],
              [
                'v10.1',
                0.96
              ],
              [
                'v10.0',
                0.36
              ],
              [
                'v9.1',
                0.54
              ],
              [
                'v9.0',
                0.13
              ],
              [
                'v5.1',
                0.2
              ]
            ]
          },
          {
            name: 'Edge',
            id: 'Edge',
            data: [
              [
                'v16',
                2.6
              ],
              [
                'v15',
                0.92
              ],
              [
                'v14',
                0.4
              ],
              [
                'v13',
                0.1
              ]
            ]
          },
          {
            name: 'Opera',
            id: 'Opera',
            data: [
              [
                'v50.0',
                0.96
              ],
              [
                'v49.0',
                0.82
              ],
              [
                'v12.1',
                0.14
              ]
            ]
          }
        ]
      }
    });

    Highcharts.chart('container3', {
      accessibility: {
        point: {
          descriptionFormat: '{add index 1}. Intersection: {sets}. ' +
            '{#if (gt sets.length 1)}{name}. {/if}' +
            'Value {value}'
        }
      },
      series: [{
        type: 'venn',
        name: 'The Unattainable Triangle',
        data: [{
          sets: ['Good'],
          value: 2
        }, {
          sets: ['Fast'],
          value: 2
        }, {
          sets: ['Cheap'],
          value: 2
        }, {
          sets: ['Good', 'Fast'],
          value: 1,
          name: 'More expensive'
        }, {
          sets: ['Good', 'Cheap'],
          value: 1,
          name: 'Will take time to deliver'
        }, {
          sets: ['Fast', 'Cheap'],
          value: 1,
          name: 'Not the best quality'
        }, {
          sets: ['Fast', 'Cheap', 'Good'],
          value: 1,
          name: 'They\'re dreaming'
        }]
      }],
      title: {
        text: 'The Unattainable Triangle'
      }
    });

  }
}
