const student1 = {
    // key: value,
    // key: value
    id: 0,
    name: "Liron",
    grade: 86
}

const student2 = {
    id: 1,
    name: "Shiri",
    grade: 90
}

const student3 = {
    id: 2,
    name: "Emili",
    grade: 70
}

// console.log(student1.name)
// console.log(student2.name)
// console.log(student3.name)

student1.name = "Liran"
student1.email = "liran@gmail.com"
student1["email"] = "liran298@gmail.com"

// console.log(student1)
// console.log(student1["name"])

// אובייקטים עטופים ברשימה
// רשימה שמחזיקה אובייקטים
const students = [
    {
        id: 0,
        name: "Liron",
        grade: 86
    },
    {
        id: 1,
        name: "Shiri",
        grade: 90
    },
    {
        id: 2,
        name: "Emili",
        grade: 70
    }
]

students.forEach((student, index) => {
    console.log((index+1) + ": id", student.id)
    console.log((index+1) + ": name", student.name)
    console.log((index+1) + ": grade", student.grade)
})

const student4 = {
    id: 4,
    name: "Siri",
    grade: 80,
    // updateGrade: function(grade){
    //     this.grade = grade
    // }
    updateGrade: (grade) => {
        this.grade = grade
    },
    start: setInterval(() => {
        console.log(this.grade)
    }, 1000)
}

console.log(student4.grade)

student4.updateGrade(90)
student4.start

console.log(student4.grade)