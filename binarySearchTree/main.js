class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor () {
        //la raiz en null quiere decir que de momento no hay nada
        this.root = null;
    }

    insert(value) {
        //1. tenemos el caso de la raíz en null

        const node = new Node(value);

        if (this.root === null) {
            this.root = node;
            return;
        }

        //2. tenemos el caso de que la raíz no es null
        //empezariamos a recorrer el arbol para saber en donde 
        //ira el nuevo valor

        let current = this.root;

        while (true) {

            //Si es el mismo valor no lo insertamos
            if (value === current.value) break;

            if (value < current.value) {
                //Si nuestro lado izquier es null insertamos el valor
                if (current.left === null) {
                    current.left = node;
                    break;
                }

                //en este punto current tomara el valor de la izq 
                current = current.left;


            } else {
                if (current.right === null) {
                    current.right = node;
                    break;
                }

                current = current.right;
            }


        }


    }

    search(value) {
        if (this.root === null) return false;


        let current = this.root;
        let i = 0;

        while (current) {
            console.log(++i);

            if (value === current.value) return current;

            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }

        }

        return false;

    }

    //Recorrido
    showInOrder(node) {
        console.log("89: ", node);

        if (node === undefined) {
            node = this.root;
        }
        console.log("94: ", node);

        if (node !== null) {
            this.showInOrder(node.left);
            //Cuando se imprime aca es por que ya llegamos hasta el ultimo izquierdo
            // e imprimimos su raíz o su valor, para luego ir a la derecha
            console.log(node.value);
            this.showInOrder(node.right);
        }


    }


    showInPreOrder(node) {

        if (node === undefined) {
            node = this.root;
        }

        if (node !== null) {
            console.log(node.value);
            this.showInPreOrder(node.left);
            this.showInPreOrder(node.right);
        }

    }

    showInPostOrder(node) {

        if (node === undefined) {
            node = this.root;
        }

        if (node !== null) {
            this.showInPostOrder(node.left);
            this.showInPostOrder(node.right);
            console.log(node.value);
        }

    }

}


//Recursividad 
function recursiveShowMessage(n) {
    if (n === 0) return;
    console.log('mensaje: ', n);
    recursiveShowMessage(n - 1);
    console.log('mensaje2 : ', n);
}

// recursiveShowMessage(5);

//Usando los metodos del arbol binario

const tree = new BinarySearchTree();

tree.insert(5);
tree.insert(9);
tree.insert(1);
tree.insert(10);
tree.insert(11);
tree.insert(8);
tree.insert(4);
tree.insert(3);


// console.log(tree)

// console.log(tree.search(1));


// tree.showInOrder();

// tree.showInPreOrder();
tree.showInPostOrder();