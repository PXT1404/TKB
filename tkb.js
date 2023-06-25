// 1. Tìm phần tử HTML cha
var table = document.getElementById("table");

// 2. Tạo phần tử dòng mới
var row = document.createElement("tr");

// 3. Tạo hai phần tử cột mới với nội dung tương ứng
var column1 = document.createElement("td");
var column2 = document.createElement("td");
column1.innerHTML = "Nội dung cột 1";
column2.innerHTML = "Nội dung cột 2";

// 4. Thêm hai phần tử cột vào phần tử dòng
row.appendChild(column1);
row.appendChild(column2);

// 5. Thêm phần tử dòng mới vào phần tử HTML cha
table.appendChild(row);
