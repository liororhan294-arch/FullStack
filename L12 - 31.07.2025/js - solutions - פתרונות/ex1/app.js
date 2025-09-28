let counter = 0;

const counterUp = document.getElementById("counter-up")
const counterDown = document.getElementById("counter-down")
const counterReset = document.getElementById("counter-reset")
const counterDisplay = document.getElementById("counter-display")

counterUp.addEventListener("click", () => {
    // counter++
    // counter += 1
    // counter = counter + 1
    counterDisplay.textContent = ++counter
})

counterDown.addEventListener("click", function () {
    counterDisplay.textContent = --counter
})

counterReset.addEventListener("click", function () {
    counter = 0
    counterDisplay.textContent = counter
})