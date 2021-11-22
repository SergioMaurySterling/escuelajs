let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//FUNCION fetch data que nos permitira traer la info de la api
const fetchData = (url_api) =>{

    return new Promise((resolve,reject)=>{
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api,true);
        xhttp.onreadystatechange = (() =>{
        if(xhttp.readyState === 4){
            (xhttp.status===200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error',url_api))
        }
        });
        xhttp.send();
    });
};
// exportandolo para usarlo en challenge
module.exports = fetchData;