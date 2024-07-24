function addRow(tableId) {
  const table = document.getElementById(tableId);
  const newRow = table.insertRow();
  const newCell1 = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);
  const newCell3 = newRow.insertCell(2);

  newCell1.textContent = prompt('Ingrese el Factor/Modelo/Criterio:');
  newCell2.textContent = prompt('Ingrese el Evento/Descripción:');
  newCell3.textContent = prompt('Ingrese la Descripción:');
}
