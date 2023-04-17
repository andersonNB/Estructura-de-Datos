const numbers = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 3, 4, 5];
//esto es un metodo mutable
function mulMutable(collection, num) {

    for (let index = 0; index < collection.length; index++) {
        collection[index] *= num;
    }

    return collection;

}


const newArray = mulMutable(numbers, 2);

console.log("Inicial: ", numbers);
console.log("Despues del metodo mutable: ", newArray);


//metodo inmutable
function mulImmutable(collection, num) {
    const newNumbers = [];

    for (const item of collection) {

        newNumbers.push(item * num);

    }

    return newNumbers;
}


console.log("numbers2: ", numbers2);
console.log("inmutable: ", mulImmutable(numbers2, 2));

//Inmutabilidad en objetos
class Beer {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
}

//modifica el objeto original
function toUpperMutable(beer) {
    beer.name = beer.name.toUpperCase();
    return beer;
}

const beer = new Beer("delirium", 6);
const newBeer = toUpperMutable(beer);

console.log(beer);
console.log("mutabilidad:", newBeer);


//no modifica el objeto original
function toUpperImmutable(beer) {
    // const newBeer = { ...beer }; //spread operator
    const newBeer = structuredClone(beer); //otra forma de copiar objetos este metodo es preciso que solo utilizar el spread

    newBeer.name = newBeer.name.toUpperCase();
    return newBeer;
}

const beer2 = new Beer('delirium', 6);
const newBeer2 = toUpperImmutable(beer2);

console.log(beer2)
console.log("Inmutabilidad:", newBeer2);
