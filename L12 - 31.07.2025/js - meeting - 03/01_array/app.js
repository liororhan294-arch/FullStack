// https://images.pexels.com/photos/30877151/pexels-photo-30877151.jpeg
// https://images.pexels.com/photos/31861343/pexels-photo-31861343.jpeg
// https://images.pexels.com/photos/22632047/pexels-photo-22632047.jpeg

// img-display
// prev-btn
// next-btn

// Array

const list = []

list.push("shampo keif") // 0
list.push("gilet fusion") // 1
list.push("economica") // 2
list.push("brash hair") // 3
list.push("perfume") // 4
list.push("dordourant") // 5

// console.log(list)
// console.log(list[0]) // shampo keiof
// console.log(list[5]) // dordourant
// console.log(list[list.length - 1]) // dordourant
// console.log(list[list.length]) // error
// console.log("#----------------#")
// // loops - לולאות
// console.log("Before loop")
// for(let i = 0; i < list.length; i++){
//     console.log(list[i])
// }

// // console.log(i)
// console.log("After loop")

// לולאה מסדר גבוה - נושא מתקדם
list.forEach((item) => {
    console.log(item)
})

const new_list = list.map((item, index) => {
    if(item === "shampo keif"){
        return "lo keif"
    }
    return "id: " + index
    return item
})

new_list.forEach((item) => {
    console.log(item)
})

function some_name(){
    return 1
    return 2
}

console.log(some_name())