//Implementación de pila

class Stack {
    //esto es un atributo privado
    #items = [];

    //para poder modificar un atributo protegido o privado
    //debemos hacerlo a través de sus metodos

    //añadimos un elemento a la pila
    push(item) {
        this.#items.push(item);
    }

    //sacamos un elmento de la pila
    pop() {
        return this.#items.pop();
    }

    //obtenemos el último elemento de la pila
    peek() {
        return this.#items[this.#items.length - 1];
    }

    //obtenemos el tamaño de la pila
    size() {
        return this.#items.length;
    }
    //Con este metodo sabemos si la pila esta vacia o no
    isEmpty() {
        return this.#items.length === 0;
    }

    getItems() {
        return [...this.#items];
    }

}


const stack = new Stack();
//sale undefined si tiene el #
// console.log(stack.items);

// //pero podemos imprimir el objeto
// console.log(stack)

// stack.push("Elemento agregado a la pila");
// stack.push("Elemento agregado a la pila2");
// stack.push("Elemento agregado a la pila3");
// stack.pop();
// console.log(stack.peek());
// console.log(stack.size());
// console.log(stack.isEmpty());


// while (!stack.isEmpty()) {
//     console.log(stack.pop());
// }
//Ejemplo con HTML
const inputName = document.getElementById("name");
const divContent = document.getElementById("content");

const stackNames = new Stack();

function addToStack() {

    stackNames.push(inputName.value);
    inputName.value = "";
    inputName.focus();
    showItemsStack();
}


function showItemsStack() {

    const newStack = stackNames.getItems();
    console.log(newStack);
    divContent.innerHTML = "";

    for (let index = 0; index < newStack.length; index++) {

        divContent.innerHTML += `<p>${newStack[index]}</p>`;

    }

}

function deleteToStack() {
    stackNames.pop();
    showItemsStack();
}

