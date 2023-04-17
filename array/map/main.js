const numbers = [1, 2, 3, 4, 5];

//forma estructurada
function sumNumber(collection, num) {
    const newCollection = [];

    for (const item of collection) {
        newCollection.push(item + num);
    }
    return newCollection;

}

//usando funciones existentes
//map -> se un metodo inmutable
function sumNumber2(collection, num) {
    return collection.map(item => item + num);
}

console.log(numbers);
console.log(sumNumber(numbers, 10));
console.log(sumNumber2(numbers, 10));