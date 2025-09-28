// import express from "express"
const express = require("express")

// אפליקציית אקספרס
const app = express();
// app.use(express.json())

// CRUD operations - get, post, put, patch, delete
// app.delete
// app.patch
// app.put
// app.post
app.get("/", (req, res) => {
    // req - מה מגיע בבקשה
    // res - איזו תגובה השרת מחזיר

    // res.send("דף בית דף ראשי שלום לכם")
    res.send(`
            <html>
                <head> <title>אני מציג HTML</title></head>
                <body style="color: purple;">
                    <h1>דף html</h1>
                </body>
            </html>
        `)
})

app.get("/users", async (req, response) => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!res.ok){// res.ok == true ; !true = false ; res.ok == false, !false = true
            throw new Error("bad response")
        }
    
        const users = await res.json()
        response.send(users)
    } catch (error) {
        response.send("Error in users request")
    }
})

app.listen(5001, () => {
    console.log("Server is running on port 5001, http://localhost:5001")
})