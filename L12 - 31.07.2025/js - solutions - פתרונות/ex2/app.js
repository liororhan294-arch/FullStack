const liveInput = document.getElementById("live-input")

liveInput.addEventListener("input", () => {
    const inputVal = liveInput.value
    liveInput.nextElementSibling.textContent = inputVal
})