// Void
//Tipo explicito
//La funcion tiene un retorno void pq no retorna nada, si tiene un return lo cambiaria 
//si le ponemos el :any a la funcion al final la definimos como any
function showInfo(user) {
    console.log(`User info: ${user.id}, ${user.username}, ${user.firstName}`);
}
showInfo({ id: 1, username: 'sergioms', firstName: 'Sergio' });
//Tipo inferido, es funcion void
function showFormattedInfo(user) {
    console.log(`User info: 
        id: ${user.id}, 
        username: ${user.username}, 
        firstName: ${user.firstName}`);
}
showFormattedInfo({ id: 1, username: 'sergioms', firstName: 'Sergio' });
//Tipo void, como tipo de dato en variable
let unusable;
unusable = null;
unusable = undefined;
