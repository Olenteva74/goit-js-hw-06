const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const valueNum = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", handleClickDecrementBtn);
incrementBtn.addEventListener("click", handleClickIncrementBtn);

function handleClickDecrementBtn() {
    counterValue -= 1;
    return addMarkup(counterValue);
}

function handleClickIncrementBtn() {
    counterValue += 1;
    return addMarkup(counterValue);
}

function addMarkup(value) {
    
    return valueNum.innerHTML = `${value}`;
}