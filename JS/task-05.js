// Задание 5
// Напиши скрипт который, при наборе текста в инпуте 
// input#name-input (событие input), подставляет его текущее 
// значение в span#name-output. Если инпут пустой, в спане
//  должна отображаться строка 'незнакомец'.
console.log("========task 5");
const taskSectionRef = document.querySelector("#task05");
console.log(taskSectionRef);
const inputRef = taskSectionRef.querySelector('#name-input');
console.log(inputRef);
const spanRef = taskSectionRef.querySelector('#name-output');
console.log(spanRef);

function hndlInputChange(event){
    //console.log(event.target.value);
    // if(event.target.value.length!==0){
    //     spanRef.textContent = event.target.value;
    // }
    // else{
    //     spanRef.textContent = 'незнакомец';
    // }

    spanRef.textContent = (event.target.value.length!==0)?(event.target.value):'незнакомец';
}

inputRef.addEventListener('input',hndlInputChange); 