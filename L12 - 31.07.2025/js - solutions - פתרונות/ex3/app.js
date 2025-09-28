// https://images.pexels.com/photos/30877151/pexels-photo-30877151.jpeg
// https://images.pexels.com/photos/31861343/pexels-photo-31861343.jpeg
// https://images.pexels.com/photos/22632047/pexels-photo-22632047.jpeg

// img-display
// prev-btn
// next-btn

// camelCase - imgListArray
// PascalCase - ImgListArray
// kebab-case - img-list-array / btn-container
// snake_case - img_list_array

// Object
// String
// Number
// Array - list

// updateImage - camelCase - functions

const img_gallery = [
    "https://images.pexels.com/photos/30877151/pexels-photo-30877151.jpeg",
    "https://images.pexels.com/photos/31861343/pexels-photo-31861343.jpeg",
    "https://images.pexels.com/photos/22632047/pexels-photo-22632047.jpeg",
    "https://images.pexels.com/photos/33173929/pexels-photo-33173929.jpeg",
    "https://images.pexels.com/photos/33151108/pexels-photo-33151108.jpeg"
]

// console.log(img_gallery)

const imgDisplay = document.getElementById("img-display")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")

let currentIndex = 0
imgDisplay.src = img_gallery[currentIndex]
console.log("current index: ", currentIndex)

// option 1

// prevBtn.addEventListener("click", () => {
//     if (currentIndex !== 0) {
//         currentIndex--
//         imgDisplay.src = img_gallery[currentIndex]
//     }
//     console.log("current index: ", currentIndex)

// })

// nextBtn.addEventListener("click", () => {
//     if (currentIndex !== img_gallery.length - 1) {
//         currentIndex++
//         imgDisplay.src = img_gallery[currentIndex]
//     } else {
//         imgDisplay.src = img_gallery[currentIndex]
//         // currentIndex = 0
//     }
//     console.log("current index: ", currentIndex)
// })

// option 2

// מודולו חלוקה והחזרת השארית
let num1 = 4
let num2 = 5
let result = num1 % num2
// console.log("Result: ", result)

function updateImage() {
    imgDisplay.src = img_gallery[currentIndex]
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + img_gallery.length) % img_gallery.length
    console.log("current index: ", currentIndex)
    updateImage()
})
// 0 - 1 = -1; -1 + 5=4
// 5
// 4 % 5 = 

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % img_gallery.length
    updateImage()
    console.log("current index: ", currentIndex)
})

// 4 + 1 = 5
// 5 % 5 = 0
