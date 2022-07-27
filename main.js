/*Objeto literal */
const user = {
    name: 'Dorelly',
    firstname: 'Crisanto Silupú',
    document: 46381993,
    age: 33,
    approvedCourses: [
        "Computación básica",
        "Pensamiento lógico",
        "Preword Linux",
        "Terminal",
        "Programación Básica",
        "Css grid",
        "Diseño para Programadores",
        "Front Developer",
        "Básico de JS",
        "Front Developer Práctico",
        "Git-GitHub",
        "Html-Css",
        "Html Práctico",
        "Práctico Css",
        "Introducción Web",
        "JS closures-scope",
        "JS Práctico",
        "Mobile First",
        "POO"
    ],

    /*Médodo para que apruebe otro curso */
    passedCourse: function(newCourse) {
        this.approvedCourses.push(newCourse);
    },

    /*Método para actualizar la edad */
    updateAge(updateAge) {
        this.age = updateAge;
    }

}

user.passedCourse('POO JS');
user.updateAge(30);
console.log(user);


/*Prototipo */
function Student(name, firstname, document, age, approvedCourses) {
    this.name = name;
    this.firstname = firstname;
    this.document = document;
    this.age = age;
    this.approvedCourses = approvedCourses;

    /*Creando el método dentro del prototipo para agregar cursos */
    /*
    this.passedCourse = newCourse => {
        this.approvedCourses.push(newCourse);
    }*/

}

/*Creando métodos por fuera del prototipo */
Student.prototype.passedCourse = function(newCourse) {
    this.approvedCourses.push(newCourse);
}

/* Creando una instancia del prototipo Student */
const student1 = new Student(
    'Dorelly', 
    'Crisanto Silupú', 
    46381993, 
    33, 
    ["Computación básica", "Pensamiento lógico", "Preword Linux"]
);
student1.passedCourse('POO JS');
console.log(student1);

/*Prototipos con la sintaxis de clases */
class StudentClass {
    /*Para poder recibir los parámetros que se enviarán como argumento de la instacia del prototipo se usa el método constructor */
    constructor(name, firstname, document, age, approvedCourses){
        this.name = name,
        this.firstname = firstname,
        this.document = document,
        this.age = age,
        this.approvedCourses = approvedCourses

        /*creando métodos dentro del constructor 
        this.passedCourse = (newCourse) => {
            this.approvedCourses.push(newCourse);
        }*/
    }

    /*creando método fuera del constructor */
    passedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

/*Creando una instancia del prototipo con sintaxis de clase */
const studentClass1 = new StudentClass(
    'Dorelly', 
    'Crisanto Silupú', 
    46381993, 
    33, 
    ["Computación básica", "Pensamiento lógico", "Preword Linux"]
);

studentClass1.passedCourse('POO JS');
console.log(studentClass1);

/* Creando Prototipos con la sintaxis de clases recibiendo cómo parámetros un objeto */

class StudentClassObject {
    constructor({
        name, 
        firstname, 
        document, 
        age, 
        approvedCourses = []
    }){
        this.name = name;
        this.firstname = firstname,
        this.document = document,
        this.age = age,
        this.approvedCourses = approvedCourses
    }

    passedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

const StudentClassObject1 = new StudentClassObject({
    firstname: 'Crisanto Silupú',
    name: 'Dorelly',
    document: 46381993,
    age: 33,
    approvedCourses: ["Computación básica", "Pensamiento lógico", "Preword Linux"]
});

StudentClassObject1.passedCourse('POO JS');

console.log(StudentClassObject1);


