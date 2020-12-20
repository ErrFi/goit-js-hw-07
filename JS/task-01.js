// ^#1
// Посчитает и выведет в консоль количество категорий 
// в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.
//#2
// Для каждого элемента li.item в списке ul#categories, 
// ^найдет и выведет в консоль текст заголовка 
// элемента (тега h2) и 
// количество элементов в категории 
// (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
console.log("========task 1");
//===>
console.log("Task #1. Method 1");
const parent = document.querySelector("#categories");
const childList = parent.querySelectorAll("li.item");
console.log(`В списке ${childList.length} категории.`);

childList.forEach(item=>{
    // const itemHeader = item.querySelector("h2");
    const itemHeader = item.firstElementChild;
    console.log("Категория: ", itemHeader.textContent);
    const elemList = item.querySelectorAll("li");
    console.log("Количество элементов: ", elemList.length);
});
//===>0
// console.log("Task #1. Method 2");
// const categoriesListRef = document.querySelector("#categories");
// const categories = categoriesListRef.children;
// //===>1
//  const items = document.querySelectorAll("#categories li.item");
//  console.log(`В списке ${items.length} категории.`);
// //===>2
// const categoriesArray = [];
// if (categories.length!==0){
//     categoriesArray.push(...categories);
//     categoriesArray.forEach((item)=>{
//         [...item.children].forEach((childItem)=>{
//             if (childItem.localName==="h2"){
//                 console.log("Категория: ",childItem.textContent);                
//             };
//             if(childItem.children.length!=0){
//                 console.log("Количество элементов: ", childItem.children.length);
//             };            
//         });
//     });
// };


