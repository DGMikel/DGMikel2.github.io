Highcharts.chart('containerGANTT', {
    chart: {
        type: 'xrange'
    },
    title: {
        text: 'HORNO'
    },
    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var ix = point.index + 1,
                    category = point.yCategory,
                    from = new Date(point.x),
                    to = new Date(point.x2);
                return ix + '. ' + category + ', ' + from.toDateString() +
                    ' to ' + to.toDateString() + '.';
            }
        }
    },
    xAxis: {
        type: 'datetime'
    },
    yAxis: {
        title: {
            text: ''
        },
        categories: [
            'Juntar Madera',
            'Cortar las Piezas',
            'Lijar y desvastar',
            'Soldar',
            'Programar',
            'Ensamblar',
            'Soldar componenetes',
            'Pintar Base',
            'Pruebas',
            'Corregir errores',
            'Pruebas',
            'Exponer'
            
            
            
            
        ],
        reversed: true
    },
    series: [{
        name: 'TIEMPO',
        // pointPadding: 0,
        // groupPadding: 0,
        borderColor: 'gray',
        pointWidth: 20,
        data: [{
            x: Date.UTC(2022, 05, 15),
            x2: Date.UTC(2022, 05, 19),
            y: 0,
        }, {
            x: Date.UTC(2022, 05, 19),
            x2: Date.UTC(2022, 05, 20),
            y: 1
        }, {
            x: Date.UTC(2022, 05, 20),
            x2: Date.UTC(2022, 05, 23),
            y: 2
        }, {
            x: Date.UTC(2022, 05, 23),
            x2: Date.UTC(2022, 05, 26),
            y: 3
        }, 
        {
            x: Date.UTC(2022, 05, 27),
            x2: Date.UTC(2022, 05, 30),
            y: 4
        },
        {
            x: Date.UTC(2022, 05, 30),
            x2: Date.UTC(2022, 06, 3),
            y: 5
        },{
            x: Date.UTC(2022, 06, 6),
            x2: Date.UTC(2022, 06, 8),
            y: 6
        },{
            x: Date.UTC(2022, 06, 8),
            x2: Date.UTC(2022, 06, 10),
            y: 7
        },{
            x: Date.UTC(2022, 06, 13),
            x2: Date.UTC(2022, 06, 15),
            y: 8
        },{
            x: Date.UTC(2022, 06, 15),
            x2: Date.UTC(2022, 06, 20),
            y: 9
        },{
            x: Date.UTC(2022, 06, 24),
            x2: Date.UTC(2022, 06, 27),
            y: 10
        },{
            x: Date.UTC(2022, 06, 27),
            x2: Date.UTC(2022, 06, 30),
            y: 11
        }
    
    
    ],
        dataLabels: {
            enabled: true
        }
    }]

});
/*
<li style="color:green;">Crear el horno</li>
                <li style="color:green;">Probar el funcionamiento del horno sin monitoreo eléctronico</li>
                <li>Investigar el funcionamiento del sensor (termometro) seleccionado. </li>
                <li>Investigar y desarrollar el programa de la interface entre el horno y el CPU</li>
                <li>Investigar y desarrollar el programa de la interface entre el CPU y la implementación de visualización</li>
  */          