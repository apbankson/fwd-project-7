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

// CHART STUFF //
// Traffic chart
const trafficCanvas = document.getElementById('traffic-chart');
const trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
    }]
};
const trafficOptions = {
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

// Bar chart
const dailyCanvas = document.getElementById('daily-chart');
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};
const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
}

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// Doughnut chart
const mobileCanvas = document.getElementById('mobile-chart');

const mobileData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxwidth: 20,
            fontStyle: 'bold'
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// Message section
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', evt =>{
    if (user.value === '' && message.value === '') {
        alert('Both fields must be fillled out');
    } else if (user.value === '') {
        alert('User field must be filled out')
    } else if (message.value === '') {
        alert('Message field must be filled out')
    } else {
        alert('Message sent!')
    }
});



