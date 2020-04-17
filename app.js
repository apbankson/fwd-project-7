// Alert stuff
let alertBanner = document.getElementById('alert');
alertBanner.innerHTML = 
    `
    <div class="alert-banner">
        <p><strong>Alert:</strong> Ornare Magna Ipsum Vehicula Cras</p>
        <p class="alert-banner-close">x</p>
    </div>
    `;

alertBanner.addEventListener('click', evt => {
    const clicked = evt.target;
    if (clicked.textContent == 'x') {
        alertBanner.style.display = 'none';
    }
});

// Chart stuff
let trafficCanvas = document.getElementById('traffic-chart');
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
    }]
};
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    option: trafficOptions
});
