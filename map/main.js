const map = new Map();


//Insertar información
map.set(1, "Anderson");
map.set(2, "Maria");

//Si la llave existe se reemplaza el valor
map.set(1, "Anderson2");
console.log(map);


//Obtener un valor
console.log(map.get(1));