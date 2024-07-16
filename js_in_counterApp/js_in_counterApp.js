let count = 0
let countEl = document.getElementById("numberOfCars")
let saveEl = document.getElementById("saveEntries")

function increase (){
    count += 1
    countEl.innerText = count
    console.log(count)
}

function decrease (){
    count -= 1
    countEl.innerText = count
    console.log(count)
}

function save (){
    let previousEntries = count + ", "
    saveEl.textContent += previousEntries
    console.log(previousEntries)
}