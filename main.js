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

/* Creando Prototipos con la sintaxis de clases recibiendo cómo parámetro un objeto */

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


/* Ventajas de la programación orientada a objetos */
/* Objeto literal */
const studentPlatzi1 = {
    name: 'Dorelly',
    firstname: 'Crisanto SIlupú',
    userName: 'dcrisanto',
    points: 100,
    socialNetworks: {
        twitter: '',
        facebook: 'dorecharo15',
        instagram: 'dorecharo15'
    },
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
        "POO",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
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
                "POO",
                "Curso Básico de POO JS",
                "Curso Intermedio de POO JS",
                "ECMAScript 6"
            ]
        },
        {
            name: "Escuela de JavaScript",
            courses: [
                "Preword Linux",
                "Front Developer",
                "Front Developer Práctico",
                "Básico de JS",
                "JS Práctico",
                "ECMAScript 6"
            ]
        }
    ]
};

const studentPlatzi2 = {
    name: 'Roxana',
    firstname: 'Crisanto Silupú',
    userName: 'rcrisanto',
    points: 100,
    socialNetworks: {
        twitter: 'roxipaola',
        facebook: 'roxipaola',
        instagram: 'roxipaola'
    },
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
        "POO",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
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
                "POO",
                "Curso Básico de POO JS",
                "Curso Intermedio de POO JS",
                "ECMAScript 6"
            ]
        },
        {
            name: "Escuela de JavaScript",
            courses: [
                "Preword Linux",
                "Front Developer",
                "Front Developer Práctico",
                "Básico de JS",
                "JS Práctico",
                "ECMAScript 6"
            ]
        }
    ]
}

console.log(studentPlatzi1);

/*Ventajas POO */
class Lessons {
    constructor(name){
        this.name = name;
    }
}

const linux = new Lessons('Qué es Linux y por qué instalarlo');
const ubuntu = new Lessons('Instalando Ubuntu en VirtualBox');

class Courses {
    constructor({
        name, 
        lessons = [],
        isFree = false,
        isBassic = false
    }){
        this._name = name; // Para indicar que esta propiedad no se puede acceder fuera del prototipo, es decir escondemos el atributo
        this.lessons = lessons;
        this.isFree = isFree;
        this.isBassic = isBassic
    }
    get name() { // para poder acceder al atributo name
        return `El nombre del curso es: ${this._name}`;
    }

    set name(newName) { // Para cambiar el valor del atributo que está escondido con validaciones
        if(newName.includes('malo')){
            console.log(`Ese cambio no es posible, no puede incluir malo`);
        } else {
            this._name = newName;
        }
    }

    newLessons(newClass) {
        this.lessons.push(newClass);
    }
}

const basicComputing = new Courses({
    name: 'Computación básica',
    isFree: true
});

const prewordLinux = new Courses({
    name: 'Preword Linux',
    lessons: [
        linux,
        ubuntu
    ],
    isBassic: true
});

const terminal = new Courses({
    name: 'Terminal',
    isBassic: true
});

const basicProgramming = new Courses({
    name: 'Programación Básica',
    isFree: true
});

class LearningPaths {
    constructor({
        name,
        courses = []
    }){
        this.name = name;
        this.courses = courses
    }
    passedCourse(newCourses){
        this.courses.push(newCourses);
    }
}

const webDevelopmentSchool = new LearningPaths({
    name: 'Escuela de Desarrollo Web',
    courses: [
        basicComputing,
        prewordLinux,
        terminal,
        basicProgramming
    ]
});

const javaScriptSchool = new LearningPaths({
    name: 'Escuela de JavaScript',
    courses: [
        prewordLinux,
        basicProgramming
    ]
});

console.log(webDevelopmentSchool);

class StudentPlatzi {
    constructor({
        name,
        user,
        email,
        facebook = '',
        twitter = undefined,
        instagram = '',
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.user = user;
        this.email = email;
        this.socialNetworks = {
            facebook,
            twitter,
            instagram
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths
    }
}

/*Herencia*/
class FreeStudentPlatzi extends StudentPlatzi {
    /*los parámetros del prototipo padre los recibimos en props */
    constructor(props){
        /*super: nos permite llamar al constructor de nuestro prototipo padre*/
        super(props);
    }
     /* Creando los métodos */
     passedCourse(newCourse) {
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`Lo siento ${this.name} este curso no pertenece a la suscripción FreeStudent`);
        }
    }
}

class BasicStudentPlatzi extends StudentPlatzi {
    constructor(props){
        super(props);
    }
    passedCourse(newCourse) {
        if(newCourse.isFree || newCourse.isBassic) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`Lo siento ${this.name} este curso no pertenece a la suscripción BasicStudent`);
        }
    }
}

class ExpertStudentPlatzi extends StudentPlatzi {
    constructor(props){
        super(props);
    }

    passedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
   
    }
}

/*creando las instancias */
const studentPlatzi_1 = new StudentPlatzi({
    name: 'Dorelly del Rosario',
    user: 'dcrisanto',
    email: 'dorelly.crisanto@gmail.com',
    facebook: 'dorecharo15@hotmail.com',
    approvedCourses: [
        basicComputing,
        prewordLinux,
        terminal,
        basicProgramming,
    ],
    learningPaths: [
        webDevelopmentSchool,
        javaScriptSchool
    ]
});

const studentPlatzi_2 = new FreeStudentPlatzi({
    name: 'Roxana Paola',
    user: 'roxi',
    email: 'roxipaolacs@gmail.com',
    facebook: 'roxi',
    approvedCourses: [
        basicComputing
    ],
    learningPaths: [
        javaScriptSchool
    ]
});

studentPlatzi_2.passedCourse(prewordLinux);

console.log(studentPlatzi_1);
console.log(studentPlatzi_2);


