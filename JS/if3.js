// Prompt the user for input
let grade = prompt("Enter your numerical grade (0-100):");

// Convert the input to a number
grade = Number(grade);

// Check the grade against the grading scale
if (isNaN(grade) || grade < 0 || grade > 100) {
  alert("Invalid grade");
} else if (grade >= 70) {
  alert("A");
} else if (grade >= 60) {
  alert("B");
} else if (grade >= 50) {
  alert("C");
} else if (grade >= 45) {
  alert("D");
} else if (grade >= 40) {
  alert('E')
} else {
  alert("F");
}

