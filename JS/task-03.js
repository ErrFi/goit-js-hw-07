// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//====================>
console.log("========task 3");
const imageListRef = document.querySelector("#gallery");
console.log(imageListRef);
const newImageListRef = imageListRef.cloneNode();
console.log(newImageListRef);
// method 1
// const partial = images.reduce((acc, image)=>
// acc+`<li class="gallery__item"><img class="gallery__image" src="${image.url}" alt="${image.alt}"></li>`
// , ``);
// images.forEach(image=>{
//   partial += `<li class="gallery__item"><img class="gallery__image" src="${image.url}" alt="${image.alt}"></li>`;

// });
// newImageListRef.insertAdjacentHTML('beforeend',partial);
// imageListRef.replaceWith(newImageListRef);

//method 2
const partials = images.map(image=>`<li class="gallery__item"><img class="gallery__image" src="${image.url}" alt="${image.alt}"></li>`).reduce((acc,part)=>acc+=part, ``);
// console.log(partials);
imageListRef.insertAdjacentHTML('beforeend',partials);
// console.log(imageListRef);

