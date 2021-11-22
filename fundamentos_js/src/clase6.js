//objetos
//clave: valor
//key: value
var persona = {
    nombre: 'Sergio',
    apellido: 'Maury',
    edad: 23,
}

function imprimirNombre(persona){
    n = persona.nombre;
    a = persona.apellido;
    e = persona.edad;
    console.log(n);
    console.log(a);
    console.log(e);
}

imprimirNombre(persona);


//podemos pasarle a la funcion de atributo solamente el key que
//necesitamos
var persona = {
    nombre: 'Sergio',
    apellido: 'Maury',
    edad: 23,
}

//le pasamos las key puntuales entre corchetes
function imprimirNombre({nombre, apellido}){
    n = nombre;
    a = apellido;
    console.log(n);
    console.log(a);
}

imprimirNombre(persona);