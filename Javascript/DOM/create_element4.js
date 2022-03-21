const ele=document.createElement('h2');
ele.innerHTML='this is external element'
const parent=document.querySelector('#bd');
parent.appendChild(ele);  // append add the element in the last.
ele.classList.add('title');

console.log(ele);

const second=document.createElement('p');
second.innerHTML='this is paragraph';
const bd=document.querySelector('#bd');

bd.insertAdjacentElement('afterbegin',second);
bd.insertAdjacentElement('afterend',second);
bd.insertAdjacentElement('beforebegin',second);
bd.insertAdjacentElement('beforeend',second);


