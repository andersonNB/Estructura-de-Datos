//implementacion de cola
class Queue {
    #items = [];

    //encolar elementos a la cola
    enqueue(item) {
        this.#items.push(item);
    }

    //desencolar elementos de la cola
    dequeue() {
        return this.#items.shift();
    }

    isEmpty() {
        return this.#items.length == 0;
    }

    peek() {
        return this.#items[0];
    }

    size() {
        return this.#items.length;
    }

    getItems() {
        return [...this.#items];
    }
}

const queue = new Queue();

queue.enqueue("Valor 1");
queue.enqueue("Valor 2");
queue.enqueue("Valor 3");

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());


const queuueRequest = new Queue();

const divReq = document.getElementById("req");
const divResult = document.getElementById("result");
const url = "http://jsonplaceholder.typicode.com/posts";
let i = 1;

function add() {
    queuueRequest.enqueue(i++);
    showReq()
}

async function request() {
    while (!queuueRequest.isEmpty()) {
        const res = await fetch(url + "/" + queuueRequest.dequeue());

        const data = await res.json();
        await new Promise(res => setTimeout(res, 1000));
        showReq();

        divResult.innerHTML = `<p>${data.id}</p> <p>${data.title}</p> <p>${data.body}</p>` + divResult.innerHTML;
    }
}

function showReq() {
    const items = queuueRequest.getItems();

    if (items.length === 0) {
        divReq.innerHTML = "Sin solicitudes";
        return;
    }

    divReq.innerHTML = "";

    items.forEach((item) => {
        divReq.innerHTML += `${item} |`
    });



}