
//scope local 1
const helloworld = ()=>{
    const hello = 'Hello World';
    console.log(hello);
}

//La variable esta asignada dentro del bloque y solo accedo a ella adentro del mismo
helloworld();
//La variable no esta establecida de forma local, no puedo acceder globalmente
console.log(hello);


//Scope local 2
var scope = 'Im global';

const functionScope = ()=>{
    var scope = 'Im just a local';
    const func = () =>{
        return scope;
    }
    console.log(func());
}

//muestra la variable local (Ambito lexico: no reasigna una variable global cuando se asigna una local adentro de una funcion con el mismo nombre)
functionScope();
//Muestra la variable global
console.log(scope);
