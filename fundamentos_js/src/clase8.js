//Analizar si queremos que la funcion modifique el objeto
//Si queremos un nuevo objeto, js trabaja asi
var persona = {
    nombre: 'Sergio',
    apellido: 'Maury',
    edad: 23,
}

//si modificamos valores o parametros de un objeto adentro de una funcion
//se modificaran tambien afuera de la funcion
//parametros como referencia o como valor
//Funcion que recibe una persona e incrementa su edad
cumpleanos = (persona) =>{
    //esto modificara la edad del objeto afuera de la funcion 
    persona.edad += 1
}

cumpleanos(persona);

//MANERA CORRECTA: COPIAR EL OBJETO COMO UNO NUEVO ADENTRO DE LA FUNCION
cumpleanos2 = (persona) => {    
    return {
        //traemos todo el objeto
        ...persona,
        //entregamos un nuevo objeto con la edad modificada
        edad: persona.edad + 1
    }
}

cumpleanos2(persona);