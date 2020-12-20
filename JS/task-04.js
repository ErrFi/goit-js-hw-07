// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и 
// уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее 
// значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения 
// значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление 
// интерфейса
console.log("========task 4");
let counterValue = 0;
const taskSectionRef = document.querySelector("#task04");
const incBtnRef = taskSectionRef.querySelector("[data-action=increment]");
console.log(incBtnRef);
const decBtnRef = taskSectionRef.querySelector("[data-action=decrement]");
console.log(decBtnRef);
const textField = taskSectionRef.querySelector("#value");
console.log(textField);

function increment(){
    counterValue+=1;
    textField.textContent = counterValue;
};
function decrement(){
    counterValue-=1;
    textField.textContent = counterValue;
};

incBtnRef.addEventListener('click', increment); 
decBtnRef.addEventListener('click', decrement); 