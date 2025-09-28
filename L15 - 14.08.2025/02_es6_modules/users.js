import {sum, divide, multiply} from './math.js'

const api_users = "https://jsonplaceholder.typicode.com/users"

// export default function () {
//     console.log("test")
// }

const testDefault = () => {
    const result = sum(2, 5)
    console.log(result)
}

export default testDefault

const getAllUsers = async () => {
    try {
        const res = await fetch(api_users+"3")

        if (!res.ok) {
            throw new Error("Fetch users failed!")
        }

        const data = res.json()
        return data
    } catch (error) {
        console.error(error)
    }finally{
        console.log("always work....")
    }
}


// ייצוא של הפונקציות
// לא כברירת מחדל
export {
    getAllUsers,
}