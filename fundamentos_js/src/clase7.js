//destructurando objetos
var persona = {
    nombre: 'Sergio',
    apellido: 'Maury',
    edad: 23,
}

function imprimirNombre(persona){
    //esto es lo mismo que var nombre = persona.nombre
    var { nombre } = persona 
    console.log(nombre);
}

imprimirNombre(persona);

//OPCION 1 RETO
var persona = {
    nombre: 'Sergio', apellido: 'Maury', edad: 23,
}

imprimirNombreyEdad = (persona) => {
    var {nombre, apellido, edad} = persona
    console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años`)
}

imprimirNombreyEdad(persona)

//OPCION 2 RETO
var persona = {
    nombre: 'Sergio', apellido: 'Maury', edad: 23,
}

imprimirNombreyEdad = ({nombre, edad, apellido}) => {
    var {nombre, apellido, edad} = persona
    console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años`)
}

imprimirNombreyEdad(persona)