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
        "POO",
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
    ["Computación básica", "Pensamiento lógico", "Preword Linux",]
);
student1.passedCourse('POO JS');
console.log(student1);


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