// var contador = 0;

// const llueve = () => Math.random() < 0.25;

// do {
//     contador++;
// } while (!llueve());

// if (contador === 1) {
//     console.log(`Fui a ver si llovía ${contador} vez`);
// } else {
//     console.log(`Fui a ver si llovía ${contador} veces`);
// }

// var mes = prompt("¿Cuál es el mes actual?");
// var mes_lower = mes.toLowerCase();

// switch (mes_lower) {
//     case 'enero':
//         console.log(`El mes actual es ${mes_lower}`);

//         break;
//     case 'febrero':
//         console.log(`El mes actual es ${mes_lower}`);

//         break;
//     case 'marzo':
//         console.log(`El mes actual es ${mes_lower}`);

//         break;
//     case 'abril':
//         console.log(`El mes actual es ${mes_lower}`);

//         break;
//     case 'mayo':
//         console.log(`El mes actual es ${mes_lower}`);

//         break;
//     case 'junio':
//         console.log(`El mes actual es ${mes_lower}`);

//         break;
//     case 'julio':
//         console.log(`El mes actual es ${mes_lower}`);

//         break;
//     case 'agosto':
//         console.log(`El mes actual es ${mes_lower}`);

//         break;

//     default:
//         console.log(`El mes ingresado no existe`);
//         break;
// }

var persona1 = {
    nombre: 'Niel 1',
    apellidos: 'Ugarte 1',
    altura: 1.56,
    edad: 25,
    cantidadLibros: 30
}
var persona2 = {
    nombre: 'Niel 2',
    apellidos: 'Ugarte 2',
    altura: 1.66,
    edad: 26,
    cantidadLibros: 40
}
var persona3 = {
    nombre: 'Niel 3',
    apellidos: 'Ugarte 3',
    altura: 1.76,
    edad: 27,
    cantidadLibros: 50
}
var persona4 = {
    nombre: 'Niel 4',
    apellidos: 'Ugarte 4',
    altura: 1.86,
    edad: 28,
    cantidadLibros: 60
}
var persona5 = {
    nombre: 'Niel 5',
    apellidos: 'Ugarte 5',
    altura: 1.96,
    edad: 29,
    cantidadLibros: 70
}

const PERSONA_ALTA = 1.75;
const PERSONA_BAJA = 1.74;
var personas = [persona1, persona2, persona3, persona4, persona5];

// const esAlta = ({altura}) => {
//     return altura > PERSONA_ALTA
// };
// const esBaja = ({altura}) => {
//     return altura <= PERSONA_BAJA
// };

// var personasAltas = personas.filter(esAlta);
// var personasBajas = personas.filter(esBaja);

// console.log(personasAltas);
// console.log(personasBajas);


// const pasarAlturaCms = (persona) => {
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// }

// var personasCms = personas.map(pasarAlturaCms)  
// console.log(personasCms);

const reducer = (acum, {cantidadLibros}) => {
    return acum + cantidadLibros
};

var totalLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${totalLibros} libros`);


