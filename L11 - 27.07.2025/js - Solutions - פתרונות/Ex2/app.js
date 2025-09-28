console.log("Ex 2 Javascript connected")

// scoping 
// טווח עבודה
// למשתנים, לתנאים, לולאות, פונקציות, קוד כללי
// global scope - תחום הגלובלי - כל הקוד
let counter = 0
// const PI = 3.14
// if(counter === 0){
    // counter = counter + 1
    // counter += 1
    // counter++
    // ++counter 
// }

// console.log(counter)
// תפיסת האלמנטים
const counterShow =  document.getElementById("counter-show")
const counterClick =  document.getElementById("counter-click")
const counterReset =  document.getElementById("counter-reset")

// האזנה ללחיצה על הכפתור
// עדכון המונה קליקים
counterClick.addEventListener("click", () => {
    counterShow.textContent = ++counter
    console.log("counter: ", counter)
})

counterReset.addEventListener("click", () => {
    counterShow.textContent = 0
    counter = 0
})