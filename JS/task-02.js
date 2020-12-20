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
const listRef = document.querySelector("#ingredients");

// получаем массив элементов списка из массива "ingredients"
const itemsElementsRef = ingredients.map(item=>
  {
    const itemRef = document.createElement("li");
    itemRef.textContent = item;
    return itemRef
  })

//console.log(itemsElementsRef);
//console.log(repListRef);

listRef.append(...itemsElementsRef);
console.log(listRef);