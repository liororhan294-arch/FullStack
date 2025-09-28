// 'strict mode'
console.log("Connection to javascript succeeded meeting 02")


// NaN // Number("a") // NaN 
// primitive values
// string - מחרוזת/טקסט
// number - מספרים עשרוניים/שלמים
// boolean - אמת/שקר - true/false
// undefined - ערך לא מוגדר
// null - ערך לא מוגדר
// let z = null
let y // undefined 
let x = 15
let z = 6
z = 6

let result = x + z
// console.log(result)// prints: 21

x = 21
z = 10

result = x + z
// console.log(result)// prints: 31

// 
const a = 20
// error - לא ניתן לשנות את הערך של משתנה שהגדרנו כקבוע
// a = 20

// true - אמת
// false - שקר
// if(false)
//     console.log("true")
// if (true) {
//     console.log("true")
// } else {
//     console.log("false")
// }

console.log("--------Assignment Operators---------")

// let c = 1 // number
// let b = "1" // string
let c = 1 
let b = 1

// אם צד אחד שווה לצד השני
if(c === b){
    console.log("true")
} else {
    console.log("false")
}

if(c >= b){
    console.log("true")
} else {
    console.log("false")
}

// ==
// ===
// >=
// <=
// let num_1 = Number(prompt("הכנס מספר ראשון"))
// let num_2 = Number(prompt("הכנס מספר שני"))
// console.log(num_1 * 4)
// console.log(typeof num_1)
// console.log(num_1 + 4)
// console.log(num_1)
// if (num_1 > num_2) {
//     console.log(num_1)
// } else {
//     console.log(num_2)
// }

// let name_a = prompt("הכנס שם ראשון:")
// let name_b = prompt("הכנס שם שני:")
// console.log(name_a + name_b)

// if(true){
//     var secretPassword1 = "123456"
// }
// console.log(secretPassword1)

// if(true){
//     let secretPassword2 = "123456"
// }
// console.log(secretPassword2)

// for(let i = 0; i<10; i++){
//     console.log("inside - בפנים: ", i);
// }
// console.log("outside - בחוץ: ", i)

// Arrow Funciton () => {}
// Funciton (){}
// Funciton name(){}

console.log("-----------Functions-----------")

// function multiply(a, b) {
//     let result = a * b
//     // console.log(result)// NaN - לא מספר
//     return result;
// }

// error
// multiply()

// correct
// console.log(multiply(10, 5))
// multiply(1, 7)
// multiply(2, 4)
// multiply(4, 3)

// Function Expression - ביטוי כפונקציה
const multiplyExpression = function (a, b) {
    let result = a * b
    return result
}

console.log(multiplyExpression(5, 8))

// Arrow Function
const multiply = (a, b) => {
    let result = a * b
    return result
}

console.log(multiply(1, 4))

// Short Arrow Function
const multiplyShortArrow = (a, b) => a * b


console.log(multiplyShortArrow(4, 7))