const student = {
    name: "Ben",
    age: 31,
    phone: "056056050",
    email: "bdas@dsanjkdnsa"
}
// console.log(student.name)
// const name = student.name
// const age = student.age
// console.log(name, age)

// Object destructuring - פירוק מבנים
const {name, age, email, phone} = student
// console.log(name, age, email, phone)

const printStudentDetails = ({name, age}) => {
    console.log(`student name: ${name}`)
    console.log(`student age: ${age}`)
}

printStudentDetails(student)