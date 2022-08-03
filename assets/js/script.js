let myArray = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

let table = document.createElement("table"),
  start = document.createElement("button"),
  section = document.querySelector("section");
(tableCells = ""), (isPlaying = true);

section.appendChild(table);
section.appendChild(start);

for (let i = 0; i < myArray.length; i++) {
  tableCells += `
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    `;
}

table.innerHTML = tableCells;
start.innerHTML = "START";
