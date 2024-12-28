const guessNum = document.querySelector(".guessNum")
const submitBtn = document.querySelector(".submit-btn")
const message = document.querySelector("#message")
const form = document.querySelector("form")
form.addEventListener("submit", (e) => e.preventDefault())

const randomNum = Math.ceil(Math.random() * 100);

submitBtn.addEventListener("click", (e) => {
    const guessValue = parseInt(guessNum.value)
    if (guessValue > randomNum) {
        message.innerText = "too high"
        message.style.display = "block"
        message.style.color = "blue"
    } else {
        message.innerText = "too low"
        message.style.display = "block"
        message.style.color = "blue"
    }
    if (guessValue === randomNum) {
        message.innerText = "congrats guess is correct"
        message.style.display = "block"
        message.style.color = "lightyellow"
    }
})





