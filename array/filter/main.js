const names = ["Ana", "Alejandro", "Francisco", "Héctor", "Javier", "Jesús", "Sergio", "Víctor", "Armando"];

//modo estructurado
function searchFirstLetter(collection, letter) {
    const newCollection = [];

    for (const word of collection) {

        if (word[0].toUpperCase() === letter.toUpperCase()) {
            newCollection.push(word);
        }

    }

    return newCollection;
}


console.log(searchFirstLetter(names, "J"));

//funciones ya existentes de js
function searchFirstLetter2(collection, letter) {
    return collection.filter((word) => word[0].toUpperCase() === letter.toUpperCase());
}

console.log(searchFirstLetter2(names, "J"));