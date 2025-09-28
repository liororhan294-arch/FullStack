const getAllUsers = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/userss")
        // console.log(res)
        if (!res.ok) {
            console.log("תגובה: נכשל")
            // return "failed"
            throw new Error("השרת נכשל בהבאת המשתמשים")
        }
        return await res.json()
    } catch (err) {
        console.error(err)
        return "example error"
    }
}

// אפשרות ראשונה
// try/catch עובד מעולה ביחד עם async/await
const tryRunFunction = async () => {
    // ניהול שגיאות בתוך פונקציה אסינכרונית
    try {
        const data = await getAllUsers()
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}


tryRunFunction()

// אפשרות שניה
// ניהול שגיאות ללא פונקציה אסינכרונית
// getAllUsers()
//     .then(
//         (resolve) => {
//             console.log("success")
//             console.log(resolve)
//         }
//     )
//     .catch(
//         (reject) => {
//             console.log(reject)
//         }
//     )