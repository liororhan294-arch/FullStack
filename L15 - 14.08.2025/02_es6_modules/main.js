import test, { getAllUsers as gau } from "./users.js"
console.log("starting javascript...")

// export default
test()

console.log("some actions...")

// const get_Users = document.getElementById("get-users")
const users_list = document.getElementById("users_list")

// example with join
const fruits = ["pineapple", "watermelon", "melon", "strawberries"]
// [].join("")
const fruits_string = fruits.map((fruit) => {
    return `
        <li>${fruit}</li>
    `
})
.join("")
console.log(fruits_string)

// להפעיל פונקציה שתקבל את הפונקציה
const getUsers = async () => {
    const users = await gau()
    console.log(users)
    const users_names = users.map((user) => {
        return `
            <li>${user.name}</li>
        `
    }).slice(0,3).join("")

    users_list.innerHTML = users_names
}

// get_Users.addEventListener("click", getUsers)

// לחלץ את התגובה החיובית או השלילית מהפונקציה
// getAllUsers()
//     .then((users) => {
//         console.log(users)
//     })
//     .catch((error) => {
//         console.error(error)
//     })

console.log("finish...")

window.getUsers = getUsers