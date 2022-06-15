//var (globally scoped), let (you can reassign values), const (does not let you reassign the value)
//always use const unless you know you will reassign (such as a score in a game)

//primitive (directly assigned to memory (strings, numbers, boolean, null, undefined, symbols))

const name1 = 'John';
const age = 30;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z; 


console.log(typeof z);

//strings
//concatenation
console.log('my name is ' + name1 + 'and I am ' + age);
//template string
console.log(`my name is ${name1}`)

//string methods

console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.substring(0, 2))
console.log(name1.split('o'))

const s = 'technology, computers, it, code'
console.log(s.split(', '))

//arrays

const numbers = new Array('1,2,3,4');
const fruits = ['apples', 'oranges', 'pears', 3, true]
console.log(fruits);
console.log(numbers);

/*
multi line comment

*/

//typescript is basically java with extra features (such as static typing)

console.log(fruits[1]);

fruits.push('mangos');

console.log(fruits);

fruits.unshift('strawberries');

console.log(fruits);

console.log(typeof(fruits));

console.log(fruits.indexOf('oranges'));

//objects

const person={
    firstname: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music'],
    address: {
        street: '50 main st',
        city: 'Boston',
    }
}

console.log(person);

console.log(person.hobbies[1], person.address.street);

person.email = 'johnDoe@gmail.com';

console.log(person.email);

const todos = [
{
    id: 1,
    text: 'Take out trash',
    isCompleted: true,
},
{
    id: 2,
    text: 'Text Boss',
    isCompleted: true,
},
{
    id: 3,
    text: 'Meet with boss',
    isCompleted: false,
}
];

//converting to JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for loops
for(let i = 0;  i <5; i++){
console.log(i*i, `For Loop Number: ${i}`);
}

//while
let i = 0;
while(i<7){
    console.log(`While Loop Number ${i}`)
    i++;
}

//looping through array:
for(let i = 0; i < todos.length; i++){
    console.log(`For Loop Number: ${i}`);
    console.log(`ToDos:${todos[i].text}`);
}

for(let todo of todos){
    console.log(todo);
}

//higher order array methods
//forEach, map, filter
todos.forEach(function(todo){
console.log(todo.text);
});

const todoTextMap = todos.map(function(todo) {
    return todo.text;
})

console.log(todoTextMap);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
})

console.log(todoCompleted)

//conditionals
//=== compares value with type conversion
const x1 = '10';

if(x1==10){
    console.log('x is 10');
}else{
console.log('x is not 10');
}

//ternary operator (used to assign variables based on condition)

const x3 =10;

const color = x3 > 10 ? 'red' :'blue';
console.log(color);

//switches

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break

}

//functions

function addNums(num1= 1, num2 = 2) {
    return num1+num2;



}

console.log(addNums());

console.log(addNums(5,5));

const addNumsWithArrow = num1 => num1 + 5;
console.log(addNumsWithArrow(7));

//OOP
//constructor function
function Person(firstName, lastName, DOB){
    this.firstName = firstName;
    this.lastName = lastName;
    this.DOB = new Date(DOB);

    this.getBirthYear = function() {
        return this.DOB.getFullYear();
    }
}

//prototypes (puts it into a prototype folder, just adds another layer)
Person.prototype.getFullNameInPrototype = function() {
    return `${this.firstname} ${this.lastName}`;
}

//instantiating object 
const person1 = new Person('John','Doe','4-3-1980');



console.log(person1);

console.log(person1.DOB.getFullYear());

console.log(person1.getBirthYear());

//I can't figure out why this does not work
//console.log(person1.prototype.getFullNameInPrototype());

//classes (using syntatic sugar)
class PersonClass {
    constructor(firstName,lastName,DOB){
        this.firstName = firstName;
        this.lastName = lastName;
        this.DOB = new Date(DOB);
    }

    getBirthYear(){
        return this.DOB.getFullYear
    }
}

const person2 = new PersonClass();
console.log(person2);

