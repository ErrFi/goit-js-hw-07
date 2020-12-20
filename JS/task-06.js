// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

console.log("========task 6");
const taskSectionRef = document.querySelector("#task06");
//console.log(taskSectionRef);
const inputRef = taskSectionRef.querySelector('#validation-input');
//console.dir(inputRef);

function hndlInputBlur(event){
    //console.log(event.target.value, 'length is: ', event.target.value.length, 'must be: ', inputRef.getAttribute('data-length'));
    const requiredLength = Number(inputRef.getAttribute('data-length'));
    if (event.target.value.length===requiredLength){
        if(inputRef.classList.contains('valid')){
            return;
        };
        if(inputRef.classList.contains('invalid')){
            inputRef.classList.replace('invalid', 'valid');
            return;
        }; 
        if(!inputRef.classList.contains('valid')&&!inputRef.classList.contains('invalid')){
            inputRef.classList.add('valid');
            return;
        };
        return;
    }
    else{
        //alert("not match!");
        if(inputRef.classList.contains('invalid')){
            return;
        };
        if(inputRef.classList.contains('valid')){
            inputRef.classList.replace('valid', 'invalid');
            return;
        }; 
        if(!inputRef.classList.contains('valid')&&!inputRef.classList.contains('invalid')){
            inputRef.classList.add('invalid');
            return;
        };       

    }
}
inputRef.addEventListener('blur', hndlInputBlur);
