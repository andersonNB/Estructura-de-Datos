//Esta función es una función de orden superior, al recibir un callback como parametro 
//se convierte en orden superior
setTimeout(() => console.log("Hola con setTimeout después"), 5000)

//creando una promesa con JS
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Se ejecuta la promesa")


        resolve("Este es el valor que retorna la promesa o lo que el resolve nos retorna");
        reject("algo paso, error");

    }, 1000);
});

myPromise.then((res) => {
    console.log("resolviendo al respuesta: ", res)
})
    .catch((err) => { console.error(err) });


//APi fetch
fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(json => console.log(json));

//async y await
//iife
(function () {
    console.log("Soy una IIFE: Expresión de función ejecutada inmediatamente");
})();

//esto es un objeto literal
const jsonLocal = {
    "name": "Héctor de León",
    "email": "unmail@gmail.com",
    "twitter": "twitter.com",
    "skills": ["backend", "frontend", "IOT"],
    "address": {
        "city": "",
        "region": "",
        "country": ""
    }
}

//leyendo nuestro json con el api fetch
fetch(jsonLocal).then(data => data.json())
    .then(json => console.log(json));

