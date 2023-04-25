const map = new Map();


//Insertar información
map.set(1, "Anderson");
map.set(2, "Maria");

//Si la llave existe se reemplaza el valor
map.set(1, "Anderson2");
console.log(map);


//Obtener un valor
console.log(map.get(1));

//validar si existe un valor
console.log(map.has(11));
console.log(map.has(1));

//Eliminar un valor
map.delete(1);

console.log(map);


const keyObject1 = { id: 1, hash: "123" };
const keyObject3 = { id: 1, hash: "123" };

map.set(keyObject1, "Curso");

console.log(map)

console.log(map.get(keyObject3));


//meter de forma encadenada la informaicón
//el map.set en js retorar el mapa modificado por lo cual nos permite
//hacer lo siguiente
map.set(20, "Hugo").set(21, "Paco").set(22, "Luis");
console.log(map)


//recorrer la colección
// for (const value of map.values()) {
//     console.log(value);
// }

// for (const key of map.keys()) {
//     console.log(key);
// }

for (const entry of map.entries()) {
    console.log(entry)
}

//eliminar todo el mapa
// map.clear();

//EJEMPLO DE USO
const textCode = document.getElementById("code");
const textCustomer = document.getElementById("customer");
const divContent = document.getElementById("content");


const customers = new Map();



function add() {
    customers.set(textCode.value, textCustomer.value);
    textCustomer.value = "";
    textCode.value = "";
    textCode.focus();
    show();
}

function show() {
    divContent.innerHTML = "";
    for (const [key, value] of customers) {
        divContent.innerHTML += `<p>${key} - ${value}</p>`;
    }
}
