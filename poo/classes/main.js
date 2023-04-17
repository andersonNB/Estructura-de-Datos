//Creando Objetos

const juan = new Object();
juan.name = 'Juan';
juan.age = 21;
console.log(juan);


//Creando la clase

class People {

    //Este se invoca cuando se crea un objeto
    //en este caso de la clase People
    //parametros requeridos
    constructor (name, lastName) {
        //asignamos los parametros a las propiedades 
        //del obj, si creamos el objeto y no le pasamos
        //valores los crea como undefined
        this.name = name;
        this.lastName = lastName;
    }


    hi() {
        return 'Hola, Soy ' + this.name + ' ' + this.lastName;
    }

    fullName() {
        return this.name + ' ' + this.lastName;
    }

}

//Herencia
class Student extends People {

    //con el extends heredamos las propiedades de la clase
    // y también sus funciones

    constructor (name, lastName, career) {
        //con el metodo super le pasamos la información que necesita el padre
        //para poder inicializar sus objetos (en caso de que lo necesite)
        super(name, lastName);
        this.career = career;
    }

    hi() {
        return super.hi() + ' estudiante de la carrera ' + this.career
    }

    carreerDetail() {
        return 'Estudian en: ' + this.career;
    }


}


const person = new People('Anderson', 'Navarro');
// const person = new People();

console.log(person);
console.log(person.hi());
console.log(person.fullName());

const person2 = new People('Augusto', 'Baron');
console.log(person2);
console.log(person2.hi());
console.log(person2.fullName());

//Objeto hijo
const person3 = new Student('Jun', 'Gevaru', 'Sistemas');
console.log(person3.hi());
console.log(person3.carreerDetail());
