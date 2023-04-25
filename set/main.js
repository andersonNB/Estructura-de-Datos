//Set -> no se repiten los elementos

const set = new Set();

set.add(5);
set.add(1);

console.log(set);

//aunque tengan el mismo valor , lo que se evalua en los objetos es la referencia

set.add({ "name:": "Hugo" });
set.add({ "name:": "Juan" });

console.log(set)


const people = { "name": "Anderson" }


set.add(people);
set.add(people);
console.log(set)
//eliminar 
set.delete(people);

console.log(set)


//validar si un valor existe
const book = { "name": "El señor de los anillos" };

set.add(book);

if (set.has(book)) {
    console.log("Existe el libro buscado por referencia")
}


//array en set
const array = [1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 9];

const setArray = new Set(array);
console.log("44:", setArray);

setArray.forEach(element => {
    console.log(element)
});

//limpiar set
set.clear();
console.log(set)

//Ejemplo de uso de SET

const functions = new Set();

function addAction(fn) {

    functions.add(fn);

    console.log(functions);
}

function action1() {
    console.log("action1")
}

function action2() {
    console.log("action2")
}

console.log(action2 instanceof Object)

function action3() {
    console.log("action3")
}

function action4() {
    console.log("action4")
}


function run() {
    for (const fn of functions) {
        fn();
    }
}
