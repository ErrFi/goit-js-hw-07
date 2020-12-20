// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, 
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

console.log("========task 8");
const taskSectionRef = document.querySelector("#task08");
const amountRef = taskSectionRef.querySelector('input');
const btnCreateRef = taskSectionRef.querySelector('[data-action=render]');
const btnDestroyRef = taskSectionRef.querySelector('[data-action=destroy]');
const parentBlock = taskSectionRef.querySelector('#boxes');

console.log(parentBlock);

const hndlBtnCreate = function(event){
    console.log("create button clicked!",amountRef.value);
    const rndBtwn = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    console.log(Number(amountRef.value));
    const amount=Number(amountRef.value);
    if (amount!==NaN){
        const childBlockRefs = [];
        for(let i=0; i<amount; i++)
        {
            console.log("iteration: ",i);            
            const childRef = document.createElement("div");
            childRef.classList.add("box");
            childRef.style.width = `${30+i*10}px`;
            childRef.style.height = `${30+i*10}px`;
            childRef.style.backgroundColor = `rgb(${rndBtwn(0, 255)},${rndBtwn(0, 255)},${rndBtwn(0, 255)})`;
            childBlockRefs.push(childRef);
        }
        parentBlock.append(...childBlockRefs);
        console.dir(parentBlock.children);
    }     
    
}
const hndlBtnDestroy = function(event){
    console.log("destroy button clicked!");
    [...parentBlock.children].forEach(elm=>{elm.remove();}
    );
}
btnCreateRef.addEventListener('click',hndlBtnCreate);
btnDestroyRef.addEventListener('click',hndlBtnDestroy);

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string