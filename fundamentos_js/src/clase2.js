//declaración e inicialización en una misma linea de varias variables
var nombre = 'Sergio' , apellido = 'Maury'

//convertir nombre en mayuscula, función: .toUpperCase()
var nombreEnMayusculas = nombre.toUpperCase();
//convertir apellido en minuscula, función: .toLowerCase()
var apellidoEnMinusculas = apellido.toLowerCase();
//Interpolación de texto
console.log(`Nombre: ${nombreEnMayusculas}, Apellido: ${apellidoEnMinusculas}`)

//saber cual es la letra X de un string, función: charAt(X);
var letraXNombre = nombre.charAt(2);
console.log(letraXNombre);

//saber cuantos caracteres tiene un string, Atributo: .length
var qtyNombre = nombre.length;
console.log(qtyNombre);

//acceder a un substring (adentro de un string), función: .substr(inicio, fin) 
var str = nombre.substr(1,3);