// let sentence = "new sentence";// string

// // string
// // סוג של מידע שמחזיק רצף של תווים
// // טקסט

// console.log(sentence)

// data types - סוגי נתונים
// primitives - משתנים פרימטיביים
// string - מחרוזת/טקסט - רצף של תווים
// number - מספר, מספר עשרוני/שלם
// boolean - true / false - פסוק אמת או שקר
// משתנים מורכבים
// Object - אוסף של מידע
// Array - רשימה של מידע

console.log("Javascript is successfuly connected!")

// document - האובייקט שמייצגלנו את 
//מסמך ה HTML

// h1 element
const mainTitle = document.getElementById("main-title")
const changeTxtButton = document.getElementById("change-txt-btn")

// mainTitle = "text" - error

changeTxtButton.addEventListener("click", () => {
    // console.log("Button Clicked!")
    mainTitle.textContent = "שימו לב, הטקסט שבי השתנה"
    // mainTitle.style.color = "blue"
    changeTxtButton.textContent = "לחצתם עליי"
    mainTitle.classList.add("change-color");
})

