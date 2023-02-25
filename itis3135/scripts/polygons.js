// Function Definitions

const validateEntry = (entry) => {
    let validated;
    if(Math.round(entry) < 0) {
        validated = Math.abs(entry)
    } else {
        validated = entry
    }
    return validated
} 

const getShape = (num) => {
    let alertMessage
    switch(Math.round(num)) {
        case 0:
            alertMessage = "You cannot have a polygon with no sides"
            break
        case 1:
            alertMessage = "Henagon's have one side!"
            break
        case 2:
            alertMessage = "Digon's have 2 sides!"
            break
        case 3:
            alertMessage = "Trigon's have 3 sides!"
            break
        case 4:
            alertMessage = "Tetragon's have 4 sides!"
            break
        case 5:
            alertMessage = "Pentagon's have 5 sides!"
            break
        case 6:
            alertMessage = "Hexagon's have 6 sides!"
            break
        case 7:
            alertMessage = "Heptagon's have 7 sides!"
            break
        case 8:
            alertMessage = "Octagon's have 8 sides!"
            break
        case 9:
            alertMessage = "Enneagon's have 9 sides!"
            break
        case 10:
            alertMessage = "Decagon's have 10 sides!"
            break
        default: 
            alertMessage = "That's not a number 0-10!"
    }
    return alertMessage
}

// Main program 
let input = prompt("The Yellow Yak would like you to pick a number from 0-10")
let response = ""

if(input != null) {
    response = getShape(validateEntry(input))
    alert(response)
}
