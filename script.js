document.getElementById('compteur').textContent = data.length + ' lignes';

const tbody = document.getElementById('tbody');

// test on affiche les 50 premieres lignes
data.slice(0, 50).forEach(a => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${a['"Num_Acc"']}</td>
    <td>${a['"num_veh"']}</td>
    <td>${a['"catv"']}</td>
    <td>${a['"choc"']}</td>
  `;
  tbody.appendChild(tr);
});
