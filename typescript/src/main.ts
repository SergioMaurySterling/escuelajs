//Number
//Explicito
let phone: number;
phone = 1;
phone = 3006180215;

//inferido
let phoneNumber = 3006180215;
//phoneNumber = true //Error por tipo

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//Tipo: boolean
//tipado explicito
let isPro: boolean;
isPro = true;

//Inferidos
let isUserPro = false; 

//Strings
let username: string = 'sergiomaury';
username = 'sergioms';
//username = true; Error por tipo de dato

//Template String
// Uso del caracter especial back-tick (`)
let userInfo: string;
userInfo = `
    User Info: 
    username: ${username}
    firstName: ${username + ' Maury'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);