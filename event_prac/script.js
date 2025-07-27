// dom manipulation

// event listeners

// element.addEventListen("click",function,boolean);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn(){
    alert('i also love js');
}

buttonTwo.addEventListener("click",alertBtn);

const change3 = document.querySelector('.boxes-box-3');

function changeColor(){
    change3.style.backgroundColor = 'blue';
}

const buttonThree = document.querySelector('.btn-3');
const buttonOne = document.querySelector('button');

buttonThree.addEventListener("mouseover",changeColor);
