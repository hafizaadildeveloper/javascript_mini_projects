const increment = document.querySelector(".increment")
const decrement = document.querySelector(".decrement")
const countNum = document.querySelector(".countNum")
const incomingVal = document.querySelector(".incomingVal")
const reset = document.querySelector(".reset")

reset.addEventListener("click", (e) => {
    countNum.innerText = 0
})

increment.addEventListener("click", (e) => {
    const countVal = parseInt(countNum.innerText)
    countNum.innerText = countVal + parseInt(incomingVal.value)
})
decrement.addEventListener("click", (e) => {
    const countVal = parseInt(countNum.innerText)
    countNum.innerText = countVal - parseInt(incomingVal.value)
})




