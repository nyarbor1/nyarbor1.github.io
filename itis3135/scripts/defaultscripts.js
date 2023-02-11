const scriptTest = () => {
    alert('Hey my script is running')
}

let date = new Date();
let day = date.getDay();
let hours = date.getHours();
let ampm = hours >= 12 ? 'pm' : 'am';


const displayDate = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dateNumber = date.getDate();
    const year = date.getFullYear();
    const time = date.toLocaleTimeString();
    document.getElementById('date').textContent =  `Today is ${time} on ${day}, ${dateNumber} ${month}, ${year}`
}

const submitForm = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const mood = document.getElementById('mood').value;
    const greeting = document.getElementById('greeting');
    let response = '';

    if(mood == 'good') {
        response = "We hope to make things even better for you."
    } else if(mood == 'bad') {
        response = "Sorry to hear you aren't doing well. Let's see if we can change that for you!"
    } else if(mood = 'soso') {
        response = "So-so is better than terrible! Let's see if we can make things better."
    }
    
    greeting.innerHTML = `The Yarborough Solutions welcomes you, ${name}! <br><br>${response}`
}

const yakCall = () => {
    document.getElementById('output').textContent = 'Yaks say Moo.'
}

const yakFact = () => {
    document.getElementById('output').textContent = 'Yaks can survive temperatures as low as -40 degrees F.'
}

const yakWeight = () => {
    document.getElementById('output').textContent = 'A single yak weighs 500-1300 lbs.'
}

const yakJoke = () => {
    document.getElementById('output').textContent = 'What kind of animal do you need in the Himalayas? <br>A yak of all trades.'
}

const yakPopulation = () => {
    document.getElementById('output').textContent = 'There are over 14 million domesticated yaks in Asia.'
}