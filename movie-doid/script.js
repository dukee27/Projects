//dom manipulation

// style element
// const title = document.querySelector('#main-heading');
// console.log(title);

// title.style.color = 'red';

// const lists = document.querySelectorAll('.list-items');
// console.log(lists);
// console.log(lists.length);
// // lists.style.fontSize = "16px";

// for( i = 0 ; i < lists.length ; i++){
//     lists[i].style.fontSize = "3rem";
// }

// Creating Elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// // add elements
// ul.append(li);

// // modifying elements

// // const firstElement = document.querySelector('.list-items');

// // console.log(firstElement.innerText);
// // console.log(firstElement.textContent);
// // console.log(firstElement.innerHTML);

// li.innerText =  'X-men';

// // modifying attributes & classes

//     // li.setAttribute('class','list-items');
//     // li.removeAttribute('class');

//     li.classList.add('list-items');
//     li.classList.remove('list-items');
//     console.log(li.classList.contains('list-items'));

// traversing the DOM
// parent node traversal 

// let ul = document.querySelector('ul');
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.querySelector('html');
// console.log(html.parentNode); // it include each node , not just element
// console.log(html.parentElement); // shows null since no element above that

// child node traversal

// console.log(ul.childNodes); // gives 11 items rather then 5 list items , thats the difference b/t nodes and elements
// console.log(ul.firstChild.textContent); // shows nothing since first child is not a list item 
// console.log(ul.lastChild.textContent); // same for this

// ul.childNodes[1].style.backgroundColor ='blue';  

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

//sibling node traversal

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

