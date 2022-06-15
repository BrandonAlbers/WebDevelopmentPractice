/*

console.log(window);

//window.alert();

//single element selectors
console.log(document.getElementById('my-form'));
//query selector is better
console.log(document.querySelector('h1'));
console.log(document.querySelector('.container'));

//multiple element selectors
console.log(document.querySelectorAll('.item'));

const items = document.querySelectorAll('.item');
items.forEach(function(item){
    console.log(item);
})


//remove
const ul = document.querySelector('.items');
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hello';
ul.children[1].innerText ='Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background ='red';


//events
btn.addEventListener('mouseover',function(e){
    e.preventDefault();
    console.log(e.target);
    console.log(e);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
    document.querySelector('.items').lastElementChild.style.backgroundColor = 'red';
});


*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();

    console.log(nameInput.value);

    if(nameInput.value=== '' || emailInput.value === ''){
        //alert('Please enter fields')

        msg.classList.add('error');
        msg.innerHTML = 'Please Enter all Fields';

        setTimeout(function(){msg.remove()}, 3000);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    }
}