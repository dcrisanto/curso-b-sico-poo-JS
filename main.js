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

/*POO */
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
});

const javaScriptSchool = new LearningPaths({
    name: 'Escuela de JavaScript',
    courses: [
        "Preword Linux",
        "Front Developer",
        "Front Developer Práctico",
        "Básico de JS",
        "JS Práctico",
        "ECMAScript 6"
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
        webDevelopmentSchool,
        javaScriptSchool
    ]
});

const studentPlatzi_2 = new StudentPlatzi({
    name: 'Roxana Paola',
    user: 'roxi',
    email: 'roxipaolacs@gmail.com',
    facebook: 'roxi',
    learningPaths: [
        javaScriptSchool
    ]
});

studentPlatzi_1.passedCourse('POO JS');
studentPlatzi_2.passedCourse('POO JS');

console.log(studentPlatzi_1);
console.log(studentPlatzi_2);



