/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")
let textEl = document.getElementById("text-el")
let btnEl=document.getElementById("btn")
let errorEl = document.getElementById("error")

btnEl.addEventListener("click",function(){
    let input = Number(textEl.value)
    if (isNaN(input)){
        errorEl.innerText="PLEASE INPUT A NUMBER!!!"
    }
    else if (!isNaN(input) && (input!="")){
        errorEl.innerText=""
        volumeResult.innerText=`
            ${input} liters = ${(input*0.264).toFixed(2)} gallons | ${input} gallons  = ${(input*3.79).toFixed(2)} liters
        `
        lengthResult.innerText=`
            ${input} meters = ${(input*3.281).toFixed(2)} feet | ${input} feet  = ${(input*0.3048).toFixed(2)} meters
        `
        massResult.innerText=`
            ${input} kilos = ${(input*2.20).toFixed(2)} pounds | ${input} pounds  = ${(input*0.454).toFixed(2)} kilos
        `
    }
})