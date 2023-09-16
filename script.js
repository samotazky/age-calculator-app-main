const inputDay = document.getElementById("inpDay")
const inputMonth = document.getElementById("inpMonth")
const inputYear = document.getElementById("inpYear")
const calculateBtn = document.querySelector("button")

/*
inputYear.addEventListener("input", (e) => {
    console.log(e.target.value)
})

let birthday = inputYear
// let years = new Date.getFullYear() - new Date(birthday)*/

calculateBtn.addEventListener("click", () => {
    const D = inputDay.value 
    const M = inputMonth.value
    const Y = inputYear.value
    const birthday = `${Y}-${M}-${D}`
    
})

calculateBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const A = inputDay.value
    console.log(A);
})