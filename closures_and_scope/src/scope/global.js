var hello = 'Hello';
var hello = 'Hello +'; //Puedo reasignar el valor a la variable 
let world = 'World';
let world = 'World +'; //Ya esta asignada y no se puede reasignar
const helloworld = 'hello world';
const helloworld = 'hello world +';  //Ya esta asignada y no se puede reasignar


//Puedo acceder a todas las variables que estan en el scope global
const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}

anotherFunction();

//MALAS PRACTICAS, VARIABLES GLOBALES ASIGNADAS ADENTRO DE FUNCIONES
const helloworld = () =>{
    globalVar = 'Im global'
}

helloworld();
console.log(globalVar); // Puedo acceder a la variable, esta asignada adentro de la funcion


const anotherFunction = () =>{
    var localVar = globalVar = 'Im global';
}

anotherFunction();
console.log(globalVar); // Puedo acceder a la variable, esta asignada adentro de la funcion