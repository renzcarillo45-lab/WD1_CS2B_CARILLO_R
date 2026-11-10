// Data containers (arrays)
// Parallel arrays: studentNames[i] belongs to studentGrades[i]
var studentNames  = ["Anna Reyes", "Ben Santos", "Carla Cruz", "David Lim", "Ella Ramos"];
var studentGrades = [92, 85, 78, 97, 74];

// Function: convert a numeric grade to its grade equivalent
function getEquivalent(grade) {
    if (grade >= 97) return "1.0";
    else if (grade >= 94) return "1.25";
    else if (grade >= 91) return "1.5";
    else if (grade >= 88) return "1.75";
    else if (grade >= 85) return "2.0";
    else if (grade >= 82) return "2.25";
    else if (grade >= 79) return "2.5";
    else if (grade >= 76) return "2.75";
    else if (grade >= 75) return "3.0";
    else return "Failed";
}

// Function: Passed / Failed remark (passing grade is 75)
function getRemark(grade) {
    return grade >= 75 ? "Passed" : "Failed";
}

// Function: academic leader title based on grade =====
function getAcademicLeader(grade) {
    if (grade >= 95) return "1st Class Academic Leader";
    else if (grade >= 90) return "2nd Class Academic Leader";
    else return "-";
}

// Function: list every student in the first table
function displayStudents() {
    var rows = "";

    // Loop through the arrays once instead of repeating code per student
    for (var i = 0; i < studentNames.length; i++) {
        rows += "<tr><td>" + studentNames[i] + "</td><td>" + studentGrades[i] + "</td></tr>";
    }

    document.getElementById("studentBody").innerHTML = rows;
}

// Function: build the Grade Equivalents table
function showGradeEquivalent() {
    var output = "<h2>Grade Equivalents</h2>" +
                 "<table>" +
                 "<tr><th>Student Name</th><th>Grade</th><th>Equivalent</th>" +
                 "<th>Remark</th><th>Academic Leader</th></tr>";

    // Evaluate each student's grade inside the loop
    for (var i = 0; i < studentNames.length; i++) {
        var grade = studentGrades[i];

        output += "<tr>" +
                  "<td>" + studentNames[i] + "</td>" +
                  "<td>" + grade + "</td>" +
                  "<td>" + getEquivalent(grade) + "</td>" +
                  "<td>" + getRemark(grade) + "</td>" +
                  "<td>" + getAcademicLeader(grade) + "</td>" +
                  "</tr>";
    }

    output += "</table>";
    document.getElementById("result").innerHTML = output;
}

// Run on page load
displayStudents();

// Show the result table when the button is clicked
document.getElementById("showBtn").addEventListener("click", showGradeEquivalent);