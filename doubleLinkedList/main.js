//Implementación de una lista enlazada

class Node {

    constructor (value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

}


class DoublyLinkedList {

    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }



    //Añadir un elemento en la lista
    add(value) {
        this.length++;

        const node = new Node(value);

        //Hacemos la siguiente validación para saber si la lista esta vacia o tiene elementos
        if (this.head === null) {

            this.head = node;
            this.tail = node;

        } else {
            //para añadir un nuevo elemento a la lista debemos
            //apuntar el siguiente elemento del ultimo elemento(cola)
            this.tail.next = node;
            //y apuntamos el elemento a su anterior
            node.prev = this.tail;
            //apuntamos la cola
            this.tail = node;
        }


    }


    //mostrar los elementos de una lista
    show() {

        let current = this.head;

        console.log("-------");
        console.log(`Cabeza ${this.head?.value} `);
        console.log(`Cola ${this.tail?.value} `);

        while (current !== null) {
            console.log(`${current.prev?.value} <- ${current.value} -> ${current.next?.value}`);

            current = current.next;
        }

    }

    //mostrar los elementos al reves
    showReverse() {

        let current = this.tail;

        console.log("------- Reverse");
        console.log(`Cabeza ${this.head?.value} `);
        console.log(`Cola ${this.tail?.value} `);

        while (current !== null) {
            console.log(`${current.prev?.value} <- ${current.value} -> ${current.next?.value}`);

            current = current.prev;
        }

    }



    //Limpiamos la lista
    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //borrar un elemento de la lista
    delete(value) {

        if (this.length === 0) return;

        //solo hay un elemento
        // let current = new Node(value);


        if (this.head.value === value) {

            if (this.length === 1) {
                this.clear();
                return;
            } else {
                //la cabeza la apuntamos al siguiente elmento
                this.head = this.head.next;
                //y si parte anterior del siguiente elemento lo apuntamos a null
                this.head.prev = null;
            }
            this.length--;
        } else if (this.tail.value === value) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
        } else {

            let current = this.head;

            while (current.next !== null) {

                if (current.next?.value === value) {
                    current.next = current.next.next;
                    current.next.prev = current;

                    this.length--;
                }

                current = current.next;
            }


        }


    }
}
const list = new DoublyLinkedList();


// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);

// list.show();

// list.showReverse();
// list.delete(4);
// list.show();



const titlePrev = document.getElementById('prev')
const titleNext = document.getElementById('next')
const image = document.getElementById('image')
const info = document.getElementById('info')

const movieDoubleLinkedList = new DoublyLinkedList()

movieDoubleLinkedList.add({ name: 'Spiderman', picture: 'https://www.sonypictures.com.co/sites/colombia/files/2022-04/SNH_LAS_OnLine_1400x2075.jpg' })
movieDoubleLinkedList.add({ name: 'Dr. Strange', picture: 'https://pics.filmaffinity.com/Dr_Strange_Doctor_Extra_o-883697036-large.jpg' })
movieDoubleLinkedList.add({ name: 'Hulk', picture: 'https://i0.wp.com/www.universomarvel.com/wp-content/uploads/2023/03/image003.jpg?ssl=1' })


const showMovie = () => {
    const movie = movieDoubleLinkedList.head;


    title.innerHTML = movie.value.name;
    image.src = movie.value.picture;

    titlePrev.innerHTML = 'Pelicula Anterior: ' + (movie.prev?.value?.name) ?? 'No hay más peliculas';
    titleNext.innerHTML = 'Pelicula Siguiente: ' + movie.next?.value?.name;


    if (movieDoubleLinkedList.head.next === null) {
        titleNext.innerHTML = 'No hay más peliculas';

    }

}

const prevMovie = () => {

    const moviePrev = movieDoubleLinkedList.head;


    if (movieDoubleLinkedList.head.prev !== null) {

        movieDoubleLinkedList.head = moviePrev.prev;
        showMovie();
    }


}

const nextMovie = () => {
    const movieNext = movieDoubleLinkedList.head;
    if (movieDoubleLinkedList.head.next !== null) {
        movieDoubleLinkedList.head = movieNext.next;
        showMovie();
    }

}
showMovie()