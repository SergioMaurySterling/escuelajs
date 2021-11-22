//Comparaciones en JavaScript
var x = 4, y = '4'

//comparar variables en cuanto a contenido
j = x == y 
console.log(j)

//comparar variables en cuanto a contenido y tipo de dato
//siempre que podamos usemos el ===
m = x === y
console.log(m)

//comparacion de objetos
var sergio = {
    nombre: 'Sergio'
}

var otroSergio = {
    nombre: 'Sergio'
}

//Nos da false pq javascript pregunta por la referencia
//del objeto al que estamos comparando
console.log(sergio==otroSergio)
console.log(sergio===otroSergio)

//Como podemos hacer para que de true?
//Haciendo que otroSergio apunte al mismo lugar en memoria que sergio
var otroSergio = sergio //las modificaciones que se le hagan tambien las sufre sergio
// == true === true 

//estamos creando un nuevo objeto, seguiran siendo diferentes en memoria
var otroSergio = { // == flase === false
    ...sergio
}