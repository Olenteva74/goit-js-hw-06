const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", handleInputText);

function handleInputText(event) {
    textOutput.textContent = event.currentTarget.value;
    
    if (textOutput.textContent === "") {
        textOutput.textContent = "Anonymous";
    }
}
