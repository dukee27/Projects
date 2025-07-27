// dom manipulation

// event listeners

// element.addEventListen("click",function,boolean);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn(){
    alert('i also love js');
}

buttonTwo.addEventListener("click",alertBtn);

const change3 = document.querySelector('.boxes-box-3');
const change2 = document.querySelector('.boxes-box-2');

function changeColor(){
    change3.style.backgroundColor = 'blue';
}

const buttonThree = document.querySelector('.btn-3');
const buttonOne = document.querySelector('.btn-1');

buttonThree.addEventListener("mouseover",changeColor);

function reveal(){
    if(change2.classList.contains('buttonOne')){
        change2.classList.remove('buttonOne');
    }
    else{
        change2.classList.add('buttonOne');
    }
    if(change3.classList.contains('buttonOne')){
        change3.classList.remove('buttonOne');
    }
    else{
        change3.classList.add('buttonOne');
    }
}

buttonOne.addEventListener("click",reveal);