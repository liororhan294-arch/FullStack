console.log("connection to ex 1")

const msgSecret = document.getElementById("message-secret")

const toggleBtn = document.getElementById("toggle-btn")

toggleBtn.addEventListener("click", () => {
    // סגנון = style
    // display = תצוגת של האלמנט
    if (msgSecret.style.display === "none") {
        msgSecret.style.display = "block"
        toggleBtn.textContent = "פסקה מוצגת"
        msgSecret.classList.add("flex-container")
    } else {
        toggleBtn.textContent = "פסקה נעלמה"
        msgSecret.style.display = "none"
        msgSecret.classList.remove("flex-container")
    }
})