const { resolve } = require("node:path");

//Viejo funciones
function newFunction(name,age,country){
    var name = name || 'sergio';
    var age = age || 23;
    var country = country || 'COL';
    console.log(name,age,country);
}

//es6 funciones

function newFunction2(name='Sergio',age=23,country='COL'){
    console.log(name,age,country);
}

newFunction2();
newFunction2('Pedro','23','CO');

// Viejo contatenar
let hello = 'Hello';
let world = 'World';
let epicPharse = hello + ' ' + world;
console.log(epicPharse);

//es6 concatenar
let epicPharse2 = `${hello} ${world}`;
console.log(epicPharse2);


//Viejo multilinea en strings, separar lineas
let lorem = 'Quiero escribir una frase epica \n'
+ 'Otra frase epica que necesitamos.';


//es6
let lorem2 = `Otra frase epica que necesitamos
y aqui otra frase epica`;

console.log(lorem);
console.log(lorem2);


//Viejo, destructuracion de elementos, ACCEDER a cada elemento
let person = {
    names: 'Sergio',
    age: 23,
    country: 'COL'
}

console.log(person.names);
console.log(person.age);
console.log(person.country);

//es6
let {names, age, country} = person;
console.log(names,age,country);

//es6, elementos en arrays, quiero unirlos para presentarlos
let team1 = ['Sergio', 'Julian', 'Pedro'];
let team2 = ['Valeria', 'Camila', 'Sofia'];

let education = ['David', ...team1, ...team2]; //Se creo uno nuevo y se unio
console.log(education);

//Viejo, variables, var la pone disponible de forma global
{
var globalVar = 'Global var';
}

//es6
{
let globalLet = 'Global let';
console.log(globalLet); // solo es accesible en este bloque
}

console.log(globalVar); //es accesible en todo el codigo

//const, constante que nunca cambiara, no se podra
//reasignar el valor como con cualquier otra: var, let
const a = 'b';
a = 'a'; //ERROR


//Viejo, crear objetos
let nami = 'Oscar';
let age = 23;

obj = {
    name: nami,
    age: age
}

//es6
obj2 = {nami,age};
console.log(obj2);


//viejo, Arrow functions: funciones anonimas
const nombre = [
    {nam: 'Sergio', age:23},
    {nam: 'Pedro', age: 32}
]

let listOfNames = nombre.map(function(item){
  console.log(item.nam);
});

//es6
let listOfNames2 = nombre.map(item=>console.log(item.nam));
const listOfNames3 = (nam, age) => {
    console.log(nam,age);
}
const listOfNames4 = nam =>{
  console.log(nam);
}
const square = num=> num*num;


//Promesas/asincronismo, js no es sincronico, va ejecutando elemento x elemento
//promesas: algo va a pasar en algun momento

const helloPromise = () =>{
    return new Promise((resolve,reject) => {
        if(true){
            resolve('Hey!');
        } else {
            reject('Ups');
        }
    });
}

helloPromise()
    .then(response=>console.log(response))
    .catch(error=>console.log(error));


//clases, POO
class calculator{
    constructor(){
        this.valueS = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//Modulos, importe esta funcion desde otro archivo de esta manera (module.js)
import {hello} from './modules.js';

hello();

//generadores: function* (funcion especial que retorna valores segun el algoritmo definido)
function* beckam(){
    if(true){
        yield 'hello'; //guarda el estado de forma interna
    }

    if(true){
        yield 'world';
    }
};

const generatorHello = beckam();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


