// corchetes []
//tipo explicito
let users;
users = ['Sergio', 'Pedro', 'Jeff'];
//tipo inferido
let otherUsers = ['Sergio', 'Pedro', 'Jeff'];
//Array<tipo>
let pictureTitle;
pictureTitle = ['Favorite sunset', 'Vacation time', 'Landscape'];
//Accediendo a los valores en un array
console.log('first user', users[0]);
console.log('first title:', pictureTitle[0]);
//propiedades en array
console.log(users.length);
users.push('hola');
users.sort(); //ordenados de forma alfabetica 
