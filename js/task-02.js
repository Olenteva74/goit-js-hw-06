const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];

const tagList = ingredients.reduce((list, element) => {

  const newTag = document.createElement("li");
  newTag.textContent = element;
  newTag.setAttribute("class", "item");
  list.push(newTag);
  return list;

}, []);


document.querySelector("#ingredients").append(...tagList);