console.log("========task 2");
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию 
// в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().
//============>
//получаем ссылку на изменяемый узел
const listRef = document.querySelector("ul#ingredients");
//console.log(listRef.children);
// клонируем полученный узел для сохранения существующих праметов и внесения изменений
const repListRef = listRef.cloneNode();
// для каждого элемента массива "ingredients" создаём элемент списка
ingredients.forEach(item=>{
    const itemRef = document.createElement("li");
    itemRef.textContent = item;
    //itemsElementsRef.push(itemRef);
    repListRef.appendChild(itemRef);
});
// console.log(repListRef);
//listRef.replaceWith(repListRef);
const newListRef = document.querySelector("ul#ingredients");
// console.log(newListRef);

const itemsElementsRef = [];
ingredients.forEach(item=>{
  const itemRef = document.createElement("li");
  itemRef.textContent = item;
  itemsElementsRef.push(itemRef);  
});
//console.log(itemsElementsRef);
//console.log(repListRef);
listRef.append(...itemsElementsRef);
console.log(listRef);