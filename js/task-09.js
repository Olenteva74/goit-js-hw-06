function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const changeColorBtn = document.querySelector(".change-color");
  const textElement = document.querySelector(".color");
  const body = document.querySelector("body");

  changeColorBtn.addEventListener("click", handleClickChangeColorBtn);

  function handleClickChangeColorBtn() {
    const randomColor = getRandomHexColor();
    textElement.textContent = randomColor;
    body.style.backgroundColor = randomColor;
  }