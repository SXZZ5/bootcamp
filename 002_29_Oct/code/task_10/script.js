var table = document.getElementById("Table");
var tableBody = table.getElementsByTagName("tbody")[0];
var addBtn = document.getElementById("add-button")
addBtn.addEventListener("click", function () {
    var name = prompt("Enter Student's Name")
    if (!name || name == "") {
        alert("Name cannot be empty")
        return;
    }

    var marks = [];
    var totalMarks = 0;
    for (let i = 1; i <= 5; ++i) {
        var a = Number(prompt(`Enter marks out of 100 in Subject ${i}`));
        if (a < 0 || a > 100) {
            alert("Marks must be between 0 to 100. Start again.");
            return;
        }
        marks.push(a);
        totalMarks += a;
    }
    var averageMarks = totalMarks / 5;


    var tableRow = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.innerText = name;
    tableRow.append(nameCell);
    for (let i = 1; i <= 5; ++i) {
        var cell = document.createElement("td");
        cell.innerText = marks[i - 1].toString();
        tableRow.appendChild(cell);
    }
    var totalMarksCell = document.createElement("td");
    totalMarksCell.innerText = totalMarks.toString()
    tableRow.appendChild(totalMarksCell);

    var averageMarksCell = document.createElement("td");
    averageMarksCell.innerText = averageMarks.toString()
    tableRow.appendChild(averageMarksCell);
    tableBody.appendChild(tableRow);
})
