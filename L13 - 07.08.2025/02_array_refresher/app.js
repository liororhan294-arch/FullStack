console.log("on")

// const students = new Array("liron", "ben", "sheli")

const students = [
    {
        name: "Ben",
        age: 31,
        phone: "050-00000"
    },
    {
        name: "Liron",
        age: 24,
        phone: "050-00021"
    },
    {
        name: "sheli",
        age: 18,
        phone: "050-00032"
    },
]

// console.log(students)
// console.log(students[0])
// console.log(students[3 - 1])
// console.log(students[students.length - 1])

// students.forEach(student => {
//     // const name = student.name
//     // const age = student.age
//     const {age, name} = student

//     console.log("student name: "+ name, "student age: " + age)
// });

console.log(students)

const new_students = students.map(student => {
    const { name, age } = student

    return `name: ${name}, age:${age}`
})

console.log(new_students)

const studentsList = document.getElementById("students-list")

// studentsList.innerHTML = new_students.join("")

new_students.forEach((student) => {
    let listItem = document.createElement('li')
    listItem.textContent = student
    // student = "<li>...</li>"
    // studentsList = "<ul></ul>"
    studentsList.append(listItem)
})

// console.log(studentsList)

// Example with map

// const names = ["name1", "name2", "name3"]
// console.log(names)

// const new_names = names.map((name, index) => {
//     return index
// })

// console.log(new_names)

// const newStudent = {
//     name: "Yosi",
//     age: 19,
//     phone: "050-00045"
// }

// students.push(newStudent)

// console.log(students)

// Biggg Errrorr
// let newStudents = students
// newStudents.push(newStudent)

// console.log("students: ", students)
// console.log("newStudents: ", newStudents)

// let newStudents = [];

// for(let i = 0; i < students.length; i++){
//     newStudents.push(students[i])
// }

// newStudents.push(newStudent)

// spread - operator ...

// let newStudents = [...students, newStudent]

// console.log("students: ", students)
// console.log("newStudents: ", newStudents)

//// filter

// const studentsOver24 = newStudents.filter((student) => {
//     if(student.age >= 24)
//         return student
// })

// const studentsOver24 = newStudents.filter(stud => stud.age >= 24)

// console.log(studentsOver24)