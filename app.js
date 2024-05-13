// 1a
const button1 = document.querySelector(`#one`)

// 1b
button1.onclick = function(){
    alert(`You clicked the first button! Congrats!`)
}

// 2a
const h3 = document.querySelector(`h3`)

// 2b
h3.addEventListener (`mouseover`, () => {
    alert(`You hovered over the h3 element! Congrats!`)
})

// 3a 
const form = document.querySelector(`form`)

// 3b

form.addEventListener(`submit`, () => {
    alert(`The Form has been submitted!`)
})