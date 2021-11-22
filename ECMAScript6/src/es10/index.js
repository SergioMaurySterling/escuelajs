//array.flat, devolver una matriz con cualquier submatriz aplanada y enteder como esta estructurada cada una
let array = [1,2,3, [1,2,3,[1,2,3]]];
console.log(array.flat()); //produndidad de la matriz a la que queremos llegar
console.log(array.flat(2));
console.log(array.flat(3));

//array donde entrega el primer valor solo y multiplicado por 2, asi con todos uno a uno
let array = [1,2,3,4,5,6];
console.log(array.flatMap(value => [value, value*2]));

//eliminar espacios en variables, al inicio y al final
let hello = '        hello world      ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

//podemos pasar de forma opcion el parametro del error al valor de catch
//viejo
try{

} catch(error){
    error = error
}

//nuevo
try{

} catch{
    error
}


//convertir un arreglo a objetos con sus elementos o visceversa 
let entries = [['name','sergio'],['age', 32]];
console.log(Object.fromEntries(entries));

//acceder a la descripcion de un elemento, que elemento se encuentran adentro 
let mySymbl = 'My symbol';
let symbol  =Symbol (mySymbl);
console.log(symbol.description);
