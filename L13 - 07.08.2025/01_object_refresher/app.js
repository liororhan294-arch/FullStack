console.log("Javascript is connected!")
console.log("Javascript is connected!")

// רענון על אובייקטים
const dog = {
    name: "boxer",
    age: 15,
    action: function () {
        console.log("bark")
        return "bark"
    },
    greet: function () {
        return "Hello " + this.name
    },
    bark: function() {
        setInterval(() => {
            console.log(this.name + " barking")
        }, 3000)
    }
}

// console.log(dog.name)
// console.log(dog["name"])
// console.log(dog["action"])
// console.log(dog["action"]())
// console.log(dog.action())

dog.legs = 4

// console.log(dog)

// אפשרות א
// console.log(dog.greet())

// אפשרות ב
// let greetDog = dog.greet()
// console.log(greetDog)

// dog.bark()

