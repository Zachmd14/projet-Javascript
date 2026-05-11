// document.getElementById('compteur').textContent =+ data.length + ' lignes dans le tableau';

const tbody = document.getElementById('tbody');

// Tri du tableau
function afficherTableau(lignes) {
  tbody.innerHTML = '';
  lignes.forEach(a => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${a['num_veh']}</td><td>${a['catv']}</td><td>${a['choc']}</td>`;
    tbody.appendChild(tr);
  });
}

afficherTableau(data.slice(0, 50));

// Trier quand on clique sur une colonne
document.querySelectorAll('th').forEach((th, i) => {
  th.addEventListener('click', function() {
    const cols = ['num_veh', 'catv', 'choc'];
    const col = cols[i];

    const lignesTri = data.slice(0, 50).sort(function(a, b) {
      if (a[col] > b[col]) return 1;
      if (a[col] < b[col]) return -1;
      return 0;
    });

    afficherTableau(lignesTri);
  });
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
