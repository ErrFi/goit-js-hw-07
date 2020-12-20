// Задание 7
// Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control (событие input) и изменяет инлайн-стиль 
// span#text обновляя свойство font-size. В результате при перетаскивании 
// ползунка будет меняться размер текста.

console.log("========task 7");
const taskSectionRef = document.querySelector("#task07");
//console.log(taskSectionRef);
const inputRef = taskSectionRef.querySelector('#font-size-control');
//console.log(inputRef);
const targetSpanRef = taskSectionRef.querySelector('#text');
//console.log(targetSpanRef);
//console.log(targetSpanRef.style.fontSize);
function hndlInputChange(event){
    
    targetSpanRef.style.fontSize = `${event.target.value}px`;
    //targetSpanRef.style.fontSize = `${event.target.value/25}rem`;
    console.log(targetSpanRef.style.fontSize);

};

inputRef.addEventListener('input',hndlInputChange);