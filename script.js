const tbody = document.getElementById('tbody');

// affichage du tableau
function afficherTableau(lignes) {
  tbody.innerHTML = '';
  lignes.forEach(a => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${a['num_veh']}</td><td>${a['catv']}</td><td>${a['choc']}</td>`;
    tbody.appendChild(tr);
  });
}

// affiche toutes les donnes au chargement
afficherTableau(data);

// trie quand on clique sur une colonne
document.querySelectorAll('th').forEach((th, i) => {
  th.addEventListener('click', function() {
    const cols = ['num_veh', 'catv', 'choc'];
    const col = cols[i];

    // trie sur la colonne clique
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

let chart; // reference globale pour pouvoir detruire / creer le graphique

function createChart(column) {
  const grouped = groupByColumn(column);
  const labels = Object.keys(grouped);
  const values = Object.values(grouped);
  const ctx = document.getElementById("chart");

  // supprime l'ancien graphique
  if (chart) chart.destroy();

  // creer le graphique
  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: column === 'catv' ? 'Type véhicule' : 'Nombre de chocs',
        data: values
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Nombre d\'accidents'
          }
        },
        x: {
          title: {
            display: true,
            text: column === 'catv' ? 'Catégorie véhicule' : 'Nombre de chocs'
          }
        }
      }
    }
  });
}

// selecteur permettant de choisir la colonne a visualiser
const columnSelect = document.getElementById("columnSelect");

if (columnSelect) {
  columnSelect.addEventListener("change", () => {
    createChart(columnSelect.value);
  });
}

let chartPie; // reference globale pour pouvoir detruire / creer le graphique

function createPieChart() {
  const grouped = groupByColumn('catv');
  const entries = Object.entries(grouped);

  // tri par odre decroissant pour garder les categories les plus representees
  entries.sort((a, b) => b[1] - a[1]);

  const top6 = entries.slice(0, 6);
  const otherCount = entries.slice(6).reduce((sum, entry) => sum + entry[1], 0);

  const labels = top6.map(entry => entry[0]);
  const values = top6.map(entry => entry[1]);

  // regroupe les "autres" categories
  if (otherCount > 0) {
    labels.push('Autres');
    values.push(otherCount);
  }

  const ctx = document.getElementById('chartPie');
  if (chartPie) chartPie.destroy();

  chartPie = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: values,
        backgroundColor: labels.map((_, i) =>
          `hsl(${(i * 360 / labels.length)}, 65%, 60%)`
        )
      }]
    },
    options: { 
      responsive: true,
      plugins: {
        legend: {
          position: 'right'
        },
        title: {
          display: true,
          text: 'Répartition par type de véhicule'
        }
      }
    }
  });
}

// initialisation des graphs au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
  createChart('choc');
  createPieChart();
});
