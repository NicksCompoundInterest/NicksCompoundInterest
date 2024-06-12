function calculate() {
  var principal = parseFloat(document.getElementById('principal').value);
  var rate = parseFloat(document.getElementById('rate').value);
  var years = parseInt(document.getElementById('years').value);

  var compoundInterest = [];
  var totalInterest = [];

  for (var i = 1; i <= years; i++) {
    compoundInterest.push(principal * Math.pow((1 + rate / 100), i));
    totalInterest.push(compoundInterest[i - 1] - principal);
  }

  document.getElementById('result').innerHTML = 'After ' + years + ' years, your investment will be worth $' + compoundInterest[years - 1].toFixed(2) + ', with total interest earned of $' + totalInterest[years - 1].toFixed(2) + '.';

  // Chart
  var ctx = document.getElementById('chartContainer').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({ length: years }, (_, i) => i + 1),
      datasets: [{
        label: 'Compound Interest',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(0, 123, 255, 1)',
        pointRadius: 4,
        data: compoundInterest,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Amount ($)'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Years'
          }
        }]
      }
    }
  });
}
