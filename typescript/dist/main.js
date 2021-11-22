//Number
//Explicito
let phone;
phone = 1;
phone = 3006180215;
//inferido
let phoneNumber = 3006180215;
//phoneNumber = true //Error por tipo
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
//Tipo: boolean
//tipado explicito
let isPro;
isPro = true;
//Inferidos
let isUserPro = false;
//Strings
let username = 'sergiomaury';
username = 'sergioms';
//username = true; Error por tipo de dato
//Template String
// Uso del caracter especial back-tick (`)
let userInfo;
userInfo = `
    User Info: 
    username: ${username}
    firstName: ${username + ' Maury'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
