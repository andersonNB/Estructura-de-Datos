//funcion de primera clase
function hi() {
    console.log("Funcion de primera clase");
}

function devolver() {
    return "Si funciona";
}

//le pasamos la referencia y ahora la variable que se asigno podra
//ejecutarse como una función
const h = hi;
//así ejecutamos la función y le pasamos el valor que esta retorne
const prueba = devolver()


//si una función tiene un return para poder ver lo que devuelve es necesario
//utilizar una función que imprima ese valor, por el contrario no retorna nada
//pero queremos ver el valor dentro de esa función debemos simplemente poner
//la variable y esta nos mostrará la info dentro

h();
console.log(prueba);


//Función de roden superior
function some(fn) {
    console.log("antes del callback");

    console.log(fn(3, 2));
    console.log("despues del callback");
}


some((a, b) => { return a + b });
