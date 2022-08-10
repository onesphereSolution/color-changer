const colors = ["Gray", "Orange", "Skyblue", "Green", "#ff6347", "#993333"]
const btn = document.querySelector('.button')
const background = document.querySelector('.color')

// const numbers = ["goat", "cow", "hen", "bird", "lion", "fowl", "tiger", "ram", "chick"];
// const text = "";

// text = document.querySelector(".numb").innerHTML;

// for (let i = 0; i < numbers.length; i++) {
//     text += numbers[i] + "<br>";
// }

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber()

    document.body.style.backgroundColor = colors[randomNumber]
    background.textContent = colors[randomNumber]
})

const getRandomNumber = () => {
   return Math.floor(Math.random() * colors.length)
}