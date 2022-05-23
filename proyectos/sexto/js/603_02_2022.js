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
            'Crear-horno',
            'Probar-horno', 
            'Investigar-sensor',
            'Desarrollar-interface-H-CPU',
            'Desarrollar-interface-CPU'
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
            x: Date.UTC(2014, 10, 21),
            x2: Date.UTC(2014, 11, 2),
            y: 0,
            partialFill: 0.99
        }, {
            x: Date.UTC(2014, 11, 2),
            x2: Date.UTC(2014, 11, 5),
            y: 1
        }, {
            x: Date.UTC(2014, 11, 8),
            x2: Date.UTC(2014, 11, 9),
            y: 2
        }, {
            x: Date.UTC(2014, 11, 9),
            x2: Date.UTC(2014, 11, 19),
            y: 3
        }, 
        {
            x: Date.UTC(2014, 11, 10),
            x2: Date.UTC(2014, 11, 23),
            y: 4
        }],
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