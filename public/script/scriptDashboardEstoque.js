
const dashboardEstoque = document.getElementById('dashboardEstoque');

const dashboardLote1 = document.getElementById('dashboard1');

const dashboardLote2 = document.getElementById('dashboard2');

const dashboardLote3 = document.getElementById('dashboard3');

const dashboardLote4 = document.getElementById('dashboard4');

new Chart(dashboardLote1, {
    type: 'bar',
    data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        datasets: [{
            label: 'Ocupação (em porcentagem)',
            backgroundColor: '#ff8c00',
            borderColor: '#ff8c00',
            data: [100, 10, 68, 75, 5, 89, 75, 60, 87, 70, 60, 80, 60],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Ocupação dos lotes',
                font: {
                    size: 20,
                    weight: 'bold'
                },
                color: '#000'
            },
            legend: {
                display: true,
                position: 'bottom'
            },
            annotation: {
                annotations: {
                    linhaHorizontal: {
                        type: 'line',
                        yMin: 20,
                        yMax: 20,
                        borderColor: 'red',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        label: {
                            display: true,
                            content: 'ZONA DE RISCO',
                            position: 'start'
                        }
                    },
                    linhaHorizonta2: {
                        type: 'line',
                        yMin: 99,
                        yMax: 99,
                        borderColor: 'green',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        label: {
                            display: true,
                            content: 'LOTE CHEIO',
                            position: 'start'
                        }
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Unidade do lote',
                    font: {
                        size: 12,
                        weight: 'bold'
                    },
                    color: '#000'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Ocupação (%)',
                    font: {
                        size: 12,
                        weight: 'bold'
                    },
                    color: '#000'
                }
            }
        }
    }
});

new Chart(dashboardLote2, {
    type: 'bar',
    data: {
        labels: ['02', '05'],
        datasets: [{
            label: 'Ocupação (em porcentagem)',
            backgroundColor: '#ff8c00',
            borderColor: '#ff8c00',
            data: [10, 5],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Lotes em estado crítico',
                font: {
                    size: 20,
                    weight: 'bold'
                },
                color: '#000'
            },
            legend: {
                display: true,
                position: 'bottom'
            },
            annotation: {
                annotations: {
                    linhaHorizontal: {
                        type: 'line',
                        yMin: 20,
                        yMax: 20,
                        borderColor: 'red',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        label: {
                            display: true,
                            content: 'ZONA DE RISCO',
                            position: 'start'
                        }
                    },
                    linhaHorizonta2: {
                        type: 'line',
                        yMin: 99,
                        yMax: 99,
                        borderColor: 'green',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        label: {
                            display: true,
                            content: 'LOTE CHEIO',
                            position: 'start'
                        }
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Unidade do lote',
                    font: {
                        size: 12,
                        weight: 'bold'
                    },
                    color: '#000'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Ocupação (%)',
                    font: {
                        size: 12,
                        weight: 'bold'
                    },
                    color: '#000'
                }
            }
        }
    }
});


function redirectEstoque() {
    dashboard_diaria.style.display = "none";
    dashboard_estoque.style.display = "block";
}

function redirectDiaria() {
    dashboard_diaria.style.display = "block";
    dashboard_estoque.style.display = "none";
}










