// Tipo explicito
//any admite cualquier tipo de dato
let idUser: any;
idUser = 1; //tipo number
idUser = '1' //tipo string
console.log(`idUser: ${idUser}`)

//Tipo inferido
let otherId;
otherId = 1; //tipo number
otherId = '2' //tipo string
console.log(`otherId: ${otherId}`)


let surprise: any = 'Hola trypescript';
//substring(x) coge el string desde ese valor
const substring = surprise.substring(5);
console.log(substring)
