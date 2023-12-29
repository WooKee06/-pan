var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bubble',
    data: {
        labels: ['Red', "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            data: [{
                x: 5,
                y: 10,
                r: 10
            },
                {
                    x: 10,
                    y: 10,
                    r: 25
                },
                {
                    x: 5,
                    y: 25,
                    r: 25
                },
                {
                    x: 10,
                    y: 25,
                    r: 10
                },
                {
                    x: 20,
                    y: 10,
                    r: 16
                },
                {
                    x: 25,
                    y: 10,
                    r: 25
                },
                {
                    x: 25,
                    y: 25,
                    r: 25
                },
                {
                    x: 5,
                    y: 15,
                    r: 40
                },
                {
                    x: 10,
                    y: 15,
                    r: 10
                },

                {
                    x: 20,
                    y: 15,
                    r: 25
                },
                {
                    x: 25,
                    y: 15,
                    r: 6
                },
                {
                    x: 5,
                    y: 30,
                    r: 16
                },
                {
                    x: 10,
                    y: 30,
                    r: 10
                },

                {
                    x: 20,
                    y: 30,
                    r: 16
                },
                {
                    x: 25,
                    y: 30,
                    r: 25
                },
                {
                    x: 5,
                    y: 20,
                    r: 12
                },
                {
                    x: 10,
                    y: 20,
                    r: 40
                },

                {
                    x: 20,
                    y: 20,
                    r: 35
                },
                {
                    x: 25,
                    y: 20,
                    r: 16
                },
                {
                    x: 15,
                    y: 10,
                    r: 16
                },
                {
                    x: 15,
                    y: 25,
                    r: 25
                },
                {
                    x: 15,
                    y: 15,
                    r: 25
                },
                {
                    x: 15,
                    y: 20,
                    r: 6
                },
                {
                    x: 15,
                    y: 30,
                    r: 25
                },
            ],
            backgroundColor: '#ff5224',
            label: 'Pyxl.ai learning dataset',
        },
            {
                data: [
                    {
                        x: 20,
                        y: 25,
                        r: 40
                    },
                ],
                backgroundColor: '#3a637f',
                font: {
                    size: 40
                },
                label: 'Google learning dataset'
            },

        ]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 20
                    }
                }
            }
        },
        responsive: true,
        scales: {
            y: {
                max: 35,
                min: 5,
                display: false
            },
            x: {
                max: 0,
                min: 30,
                display: false
            }
        },
        animation: {
            duration: 0
        },
        hover: {
            animationDuration: 0
        }
    }
});









