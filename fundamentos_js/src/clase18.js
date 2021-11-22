//funcion map
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
var personaz = [sacha, alan, martin, dario, vicky, paula]


const pasarAlturaACms = (persona) => {
    return {
        //estamos creando un nuevo objeto, no se modifica el principal
        //...persona crea uno nuevo y pisamos su altura con la nueva variable
        ...persona,
        altura: persona.altura = persona.altura * 100
    }
}

//.map: modificar una key de todos los objetos al mismo tiempo
//se genera un nuevo array y se modifica el original, se soluciona con lo que esta
//en la funcion "pasarAlturaACms"
var personasCms = personaz.map(pasarAlturaACms) 

console.table(personasCms)
console.table(personaz)

//Las diferencia entre filter() y map() radica en sus callbacks, o sea en lo que retornan.
//filter(): retornará 1 subconjunto de un Array.
//map(): retornará un nuevo Array basándose en otro de referencia.