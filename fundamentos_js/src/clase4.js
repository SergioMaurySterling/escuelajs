var nombre = 'Sergio', edad = 23;

//podemos pasar parametros a la función
function cuantosAnos (n,e){
    var result = `${n} tiene ${e} años`
    console.log(result);
}

//parametros de la función
cuantosAnos(nombre,edad);
cuantosAnos('Pedro', 34);
cuantosAnos('Isabella', 29);