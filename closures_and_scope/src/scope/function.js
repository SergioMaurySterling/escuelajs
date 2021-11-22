//
const fruits = ()=>{
    var fruit = 'apple'; //definida de forma local
    console.log(fruit);
};

fruits();
//como esta local no la puede coger
console.log(fruit);


//scope local: LAS VARIABLES ASIGNADAS CON LET Y CONST NO SE PUEDEN REASIGNAR
const anotherFunction = () =>{
    var x = 1;
    var x = 2;
    let y = 1;
    let y = 2;
    console.log(x);
    console.log(y);
}

anotherFunction();