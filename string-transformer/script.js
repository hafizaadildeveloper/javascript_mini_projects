const input = document.querySelector("#userInput");
const lowerCase = document.querySelector("#lowercase");
const upperCase = document.querySelector("#uppercase")
const camelCase = document.querySelector("#camelcase")
const pascalcase = document.querySelector("#pascalcase")
const snakecase = document.querySelector("#snakecase")
const kebabcase = document.querySelector("#kebabcase")
const trim = document.querySelector("#trim")
function l() {
    let inputString = input.value;
    let lowercaseString = inputString.toLowerCase();
    lowerCase.textContent = lowercaseString;
}
function u() {
    let inputString = input.value;
    let lowercaseString = inputString.toUpperCase();
    upperCase.textContent = lowercaseString;
}

function c() {
    let inputString = input.value;
    // 1. Split the string into words
    let words = inputString.toLowerCase().split(' ');
    // 2. Iterate through the words, capitalizing from the second word onwards
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    // 3. Join the words back together, removing spaces
    camelCase.innerText = words.join('');
}
function p() {
    let inpstr = input.value.toLowerCase()
    let words = inpstr.split(' ')
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    pascalcase.innerText = words.join('')
}
function s() {
    let inpstr = input.value.trim()
    let words = inpstr.split(' ')
    snakecase.innerText = words.join('_')
}
function k() {
    let inpstr = input.value.trim();
    let words = inpstr.split(' ')
    kebabcase.innerText = words.join('-')
}
function t() {
    let inpstr = input.value;
    trim.innerText = inpstr.trim()
}
input.addEventListener('input', (e) => {
    l()
    u()
    c()
    p()
    s()
    k()
    t()
})

window.addEventListener("load", (e) => {
    l();
    u()
    c()
    p();
    s()
    k()
    t()
})
