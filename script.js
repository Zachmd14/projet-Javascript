document.getElementById('compteur').textContent =+ data.length + ' lignes dans le tableau';

const tbody = document.getElementById('tbody');

// test on affiche les 50 premieres lignes
data.slice(0, 50).forEach(a => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${a['num_veh']}</td>
    <td>${a['catv']}</td>
    <td>${a['choc']}</td>
  `;
  tbody.appendChild(tr);
});

// graph a barre
function groupByColumn(column) {
  const counts = {};

  data.forEach(row => {
    const value = row[column];

    if (value) {
      counts[value] = (counts[value] || 0) + 1;
    }
  });

  return counts;
}
let chart; // global

function createChart(column) {

  const grouped = groupByColumn(column);

  const labels = Object.keys(grouped);
  const values = Object.values(grouped);

  const ctx = document.getElementById("chart");

  // supprimer ancien graphique
  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: column,
        data: values
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
const columnSelect = document.getElementById("columnSelect");

columnSelect.addEventListener("change", () => {
  createChart(columnSelect.value);
});
createChart('choc');
