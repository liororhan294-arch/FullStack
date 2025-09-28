console.log("Helloooooo")

const fetchDataFromApi = async (arg_id) => {
    console.log("שליפת הנתונים החלה...")

    // מחזירה Promise - מבטיח שתחזור תגובה בין אם היא חיובית או שלילית
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${arg_id}`)
    // res - response - תגובה
    const data = await res.json()

    console.log("שליפת הנתונים הסתיימה")
    console.log(data)
    const username = document.getElementById("username")
    username.textContent = data.username
}

// fetchDataFromApi()

const user_by_input = document.getElementById("user_by_input")
const find_user = document.getElementById("find_user")

find_user.addEventListener("click", () => {
    const user_id = user_by_input.value
    if (user_id <= 10 && user_id >= 1)
        fetchDataFromApi(user_id)
    else
        alert("אין משתמש כזה")
})

console.log("Byeeeeeeeeeeeee")