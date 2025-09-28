const student = {
    name: "Ben",
    age: 31,
    phone: "056056050",
    email: "bdas@dsanjkdnsa",
    grades: [80, 90, 100]
}

// מקרה ראשון שבו ידוע לי מה הפרטים של הסטודנט
const updated_student1 = {
    name: student.name,
    age: student.age,
    phone: student.phone,
    email: student.email,
    id: "1561dsa1d515321243"
}

// לא ידוע הפרטים של הסטודנט
const updated_student2 = {
    ...student,
    age: 32
}

console.log(student)
console.log(updated_student1)
console.log(updated_student2)