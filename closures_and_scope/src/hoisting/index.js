//al reproducirse el console.log, el resultado sera 2: correcto
a =2;
var a;
//el hoisting eleva las declaraciones, elevo "var a"
console.log(a);

//ERROR, por que primero intentamos acceder a la variable sin estar declarada ni inicializada
console.log(a);
var a = 2;
//El hoisting solo se usa en las declaraciones y no en las inicializaciones

//Ej: con funcion, funciona pq tengo la funcion inicializada despues de declararla
function nameOfDog(name){
    console.log(name);
};

nameOfDog('Elmo');

//Ej: con funcion, funciona pq el hoisting eleva la inicializacion
nameOfDog('Elmo');

function nameOfDog(name){
    console.log(name);
};