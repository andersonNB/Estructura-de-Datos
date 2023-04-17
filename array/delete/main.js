const names = ["Ana", "Alejandro", "Francisco", "Alejandro", "Javier", "Alejandro", "Sergio", "Víctor", "Armando"];
//modo estructurado
function removeName(collection, name) {
    const newCollection = [];
    for (const word of collection) {
        if (word !== name) {
            newCollection.push(word);
        }
    }

    return newCollection;
}
console.log(names)
console.log(removeName(names, "Alejandro"));

//usando funciones existentes
function removeName2(collection, name) {
    return collection.filter(item => item !== name);
}

console.log(removeName2(names, "Alejandro"));