var row = document.createElement("div");
row.classList.add("row");

var col1 = document.createElement("div");
col1.classList.add("col-md-6");
col1.innerText = "Cột 1";

var col2 = document.createElement("div");
col2.classList.add("col-md-6");
col2.innerText = "Cột 2";

row.appendChild(col1);
row.appendChild(col2);

document.body.appendChild(row);
