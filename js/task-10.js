function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputNumber = document.querySelector("[type='number']");
const wrapper = document.querySelector("#boxes");

createBtn.addEventListener("click", handleClickCreateBtn);
destroyBtn.addEventListener("click", handleClickDestroyBtn);

function handleClickCreateBtn() {
  const num = Number(inputNumber.value);
  createBoxes(num);
}

function createBoxes(amount) {
  const elementList = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    elementList.push(div);
   
  }

  return wrapper.append(...elementList);
}

function handleClickDestroyBtn() {
  inputNumber.value = "";
  destroyBoxes();
}

function destroyBoxes() {
  return wrapper.innerHTML = "";
}