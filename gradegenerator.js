/*A > 79,
B - 60 to 79, 
C -  59 to 49, 
D - 40 to 49,
E - less 40.*/


function Gradegenerator(student, grade) {
    student = prompt("Enter your name: ");
    grade = prompt("Enter your grade: ");
    if (grade >= 79 && grade <= 100) {
        console.log(`Today ${student} you scored grade of A`)
    }
    else if (grade >= 60 && grade < 79) {
        console.log(`Today ${student} you scored grade of B`)
    }
    else if (grade >= 49 && grade <= 59) {
        console.log(`Today ${student} you scored grade of C`)
    }
    else if (grade >= 40 && grade < 49) {
        console.log(`Today ${student} you scored grade of D`)
    }
    else if (grade >= 0 && grade < 40) {
        console.log(`Today ${student} you scored grade of E`)
    }
}
Gradegenerator();