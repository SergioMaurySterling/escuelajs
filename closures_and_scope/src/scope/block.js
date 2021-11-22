
//Accedo a ellos 
const fruits = ()=>{
    if (true){
        var fruits1 = 'apple';
        var fruits2 = 'banana';
        var fruits3 = 'kiwi'
    }
    console.log(fruits1); //puedo acceder a las variables porque estan en el scope global de la funcion
    console.log(fruits2); // var es scope global adentro de la funcion
    console.log(fruits3); // let, const son locales en el bloque
}

fruits();

//la unica manerda de acceder, que este adentro del mismo bloque
const fruits = ()=>{
    if (true){
        let fruits1 = 'apple';
        const fruits2 = 'banana';
        var fruits3 = 'kiwi'
        console.log(fruits1); //puedo acceder pq estan en el mismo bloque
        console.log(fruits2);
    }
    console.log(fruits3); // puedo acceder afuera del block pq es var
}

fruits();

// adentro del bloque y afuera del bloque, si usamos VAR podremos reasignar las variables
let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

// como usamos var y tenemos el tiempo de entrega, se reasignaron todas las entregas y el resultado fue 10, (10veces)
const anotherFunction = ()=>{ 
    for (var i = 0; i<10; i++){ //si usamos let apareceran los numeros del 1 al 10 normal pq no se reasignaran
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
};

anotherFunction();