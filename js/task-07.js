const valueInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

valueInput.addEventListener("input", handleInputValue);

function handleInputValue(event) {
    
    textOutput.style.fontSize = `${event.currentTarget.value}px`;
}