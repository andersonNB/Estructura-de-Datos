//Implementación de una lista enlazada
class Node {

    constructor (value) {
        this.value = value;
        this.next = null;
    }

}

class LinkedList {
    constructor () {
        this.head = null;
    }

    add(value) {
        const node = new Node(value);
        //hay dos casos cuando no exsite ningún valor
        //en este caso el valor sera la cabeza, si no se debe poner hasta el siguiente elemento
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = node;
        }
    }

    delete(value) {
        if (this.head.value === value) {
            this.head = this.head.next;
        } else {
            let current = this.head;

            while (current.next !== null) {

                if (current.next.value === value) {
                    current.next = current.next.next;
                    break;
                }

                current = current.next;
            }
        }
    }

    show() {
        let current = this.head;

        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    size() {
        let count = 0;
        let current = this.head;

        while (current !== null) {
            count++;
            current = current.next;
        }

        return count;
    }

    //borrar todos los elmentos de un linkedList
    clear() {
        this.head = null;
    }

}

const linkedList = new LinkedList();
linkedList.add('A')
linkedList.add('B')
linkedList.add('C')

linkedList.delete('B')
// console.log(linkedList)
console.log(linkedList.size());

linkedList.show();

//Ejemplo de uso de la lista enlazada
const title = document.getElementById('title');
const image = document.getElementById('image');
const divNext = document.getElementById('next');

const moviesLinkedList = new LinkedList();
moviesLinkedList.add({ name: 'Spiderman', picture: 'https://www.sonypictures.com.co/sites/colombia/files/2022-04/SNH_LAS_OnLine_1400x2075.jpg' })
moviesLinkedList.add({ name: 'Dr. Strange', picture: 'https://pics.filmaffinity.com/Dr_Strange_Doctor_Extra_o-883697036-large.jpg' })
moviesLinkedList.add({ name: 'Hulk', picture: 'https://i0.wp.com/www.universomarvel.com/wp-content/uploads/2023/03/image003.jpg?ssl=1' })


function showMovie() {
    const movie = moviesLinkedList.head.value;


    title.innerHTML = movie.name;
    image.src = movie.picture;

    if (moviesLinkedList.head.next !== null) {
        const movieNext = moviesLinkedList.head.next.value;

        divNext.innerHTML = 'Siguiente: ' + movieNext.name;

    } else {
        divNext.innerHTML = 'No hay más películas';
    }

}


function nextMovie() {

    const nextMovie = moviesLinkedList.head.value

    if (moviesLinkedList.head.next !== null) {
        // title.innerHTML = nextMovie.name;
        // image.src = nextMovie.picture;

        moviesLinkedList.delete(moviesLinkedList.head.value);
        showMovie();
    }
}
showMovie();
