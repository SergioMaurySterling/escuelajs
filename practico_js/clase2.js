var firstName = 'Sergio'
var lastName = 'Maury'
var username = 'sergiomaurysterling'
var years = 24
var mail = 'psergio060897@gmail.com'
var is_old = true
var saved_money = 12.000
var debts = 1.000
var realMoney = saved_money - debts

function imprimirFrase (firstName, lastName, realMoney){
    firstName = firstName
    lastName = lastName
    realMoney = realMoney

    var phrase = `Su nombre completo es: ${firstName} ${lastName} y tiene en dinero: ${realMoney} pesos`
    console.log(phrase)
}

imprimirFrase(firstName, lastName, realMoney)


const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");