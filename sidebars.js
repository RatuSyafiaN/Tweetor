/* global bootstrap: false */
(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()

$(document).ready(function() {
  $('#dataTables').DataTable();
} );


// const ctx = document.getElementById("chart").getContext('2d');
// const myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ["rice", "yam", "tomato", "potato",
//     "beans", "maize", "oil"],
//     datasets: [{
//       label: 'food Items',
//       backgroundColor: 'rgba(161, 198, 247, 1)',
//       borderColor: 'rgb(47, 128, 237)',
//       data: [300, 400, 200, 500, 800, 900, 200],
//     }]
//   },
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: true,
//         }
//       }]
//     }
//   },
// });


