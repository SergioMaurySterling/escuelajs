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

//al tener un solo parametro se pueden anular los parentesis
// al solo retornar algo se puede quitar el return
const esAlta = persona => persona.altura > 1.75
const esBaja = ({altura}) => altura < 1.75
//filtrar arrays bajo cierta condicion. array.filter(condición)
//filter nos devuelve un array nuevo
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)
 