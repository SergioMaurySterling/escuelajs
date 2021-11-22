//objetos de personas
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

//arrays/arreglos/colecciones
var personas = [sacha, alan, martin, dario, vicky, paula]


//recorrer el array e imprimir la altura  y guardarlas en otro array
//declaramos una array vacio
var alturas = []
//iniciamos cilo for desde 0 hasta hasta que i sea mayor a la cantidad
//de objetos que tenga el array personas
for (var i = 0; i<personas.length; i++){
    //extraemos la altura de cada objeto
    var resultado = personas[i].altura
    //insertamos esa altura en el array alturas
    alturas.push(resultado)
}
//imprimimos el array alturas
console.log(alturas)
 