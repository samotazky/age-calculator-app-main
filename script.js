const inputDay = document.getElementById("inpDay")
const inputMonth = document.getElementById("inpMonth")
const inputYear = document.getElementById("inpYear")
const calculateBtn = document.querySelector("button")

let invalidDay = document.querySelector(".day")
let invalidMonth = document.querySelector(".month")
let invalidYear = document.querySelector(".year")

let labelD = document.getElementById("label-day")
let labelM = document.getElementById("label-month")
let labelY = document.getElementById("label-year")


let yearsOut = document.getElementById("years")
let monthsOut = document.getElementById("months")
let daysOut = document.getElementById("days")

calculateBtn.addEventListener("click", () => {

    const D = inputDay.value 
    const M = inputMonth.value
    const Y = inputYear.value

    let currentDay = new Date().getDate()
    let currentMonth = new Date().getMonth()
    let currentYear = new Date().getFullYear()

    let yourDays = currentDay - Number(D) 
    let yourMonths = currentMonth - M 
    let yourYears = currentYear - Y

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

    if (D.length === 0 || D == "") {
        invalidDay.style.display = "block"
        inputDay.style.border = "1px solid hsl(0, 100%, 67%)"
        labelD.style.color = "hsl(0, 100%, 67%)"
    }

    if (M.length === 0 || M == "") {
        invalidMonth.style.display = "block"
        inputMonth.style.border = "1px solid hsl(0, 100%, 67%)"
        labelM.style.color = "hsl(0, 100%, 67%)"
    }

    if (Y.length === 0 || Y == "") {
        invalidYear.style.display = "block"
        inputYear.style.border = "1px solid hsl(0, 100%, 67%)"
        labelY.style.color = "hsl(0, 100%, 67%)"
    }

    yearsOut.innerText = yourYears
    monthsOut.innerText = yourMonths
    daysOut.innerText = yourDays
})

