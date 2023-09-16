const inputDay = document.getElementById("inpDay")
const inputMonth = document.getElementById("inpMonth")
const inputYear = document.getElementById("inpYear")
const calculateBtn = document.querySelector("button")

let yearsOut = document.getElementById("years")
let monthsOut = document.getElementById("months")
let daysOut = document.getElementById("days")

calculateBtn.addEventListener("click", () => {

    const D = inputDay.value 
    const M = inputMonth.value
    const Y = inputYear.value
    const birthday = `${Y}-${M}-${D}`

    let currentDay = new Date().getDate()
    let currentMonth = new Date().getMonth()
    let currentYear = new Date().getFullYear()

    let yourDays = currentDay - Number(D) 
    let yourMonths = currentMonth - M 
    let yourYears = currentYear - Y

    let yourResult = `${yourDays}.${yourMonths}.${yourYears}`

    console.log(yourResult);
    
    if (yourMonths < 0) {
        yourYears = yourYears - 1
        yourMonths = yourMonths + 12 
    }

    let getNoOfDays = (y, m) => {
        return new Date(y, m, 0).getDate()
    }
    
    if (yourDays < 0) {
        yourDays += getNoOfDays(Y, M -1)
    }

    yearsOut.innerText = yourYears
    monthsOut.innerText = yourMonths
    daysOut.innerText = yourDays
})

