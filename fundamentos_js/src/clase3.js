var edad = 27;

//sumar
edad += 1;
edad ++;
edad = edad + 1;

var peso = 75;
peso -= 1;
console.log(peso);
peso = peso - 2;
console.log(peso);

//sumar 2 numeros variables
var sandwich = 1
pesoTotal = sandwich + peso;

//restar 2 numeros variables
var jugarFutbol = 3;
pesoTotal = peso - jugarFutbol;
//o
peso -= jugarFutbol;

//decimales, multiplicación
var precioVino = 200.3;
var total = precioVino *3;

//JS no almacena decimales tan precisamente, para solucionar
//var total = (precioVino *100*3)/100;

//funcion redondear valor: Math.round(valores)
var total = Math.round(precioVino *3);
//Decirle al sistema cuantos decimales despues de la ,: variable.toFiex(decimales);
//Pero se convierte en String:
var totalStr = total.toFixed(2);
console.log(totalStr);
console.log(total);
//Volver a pasar a Number: parseFloat(variable);
//Parse: transformar/leer de String a.... lo que quieras, en este caso es Float
var totalNumber = parseFloat(totalStr);
console.log(totalNumber);


//Ejemplos:
var pizza = 8;
var persona = 2;
//división 
var qtyPorcionesPersona = pizza / persona;
console.log(qtyPorcionesPersona);