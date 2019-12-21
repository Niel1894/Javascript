var contador = 0;

const llueve = () => Math.random() < 0.25;

do {
    contador++;
} while (!llueve());

if (contador === 1) {
    console.log(`Fui a ver si llovía ${contador} vez`);
} else {
    console.log(`Fui a ver si llovía ${contador} veces`);
}

var mes = prompt("¿Cuál es el mes actual?");
var mes_lower = mes.toLowerCase();

switch (mes_lower) {
    case 'enero':
        console.log(`El mes actual es ${mes_lower}`);

        break;
    case 'febrero':
        console.log(`El mes actual es ${mes_lower}`);

        break;
    case 'marzo':
        console.log(`El mes actual es ${mes_lower}`);

        break;
    case 'abril':
        console.log(`El mes actual es ${mes_lower}`);

        break;
    case 'mayo':
        console.log(`El mes actual es ${mes_lower}`);

        break;
    case 'junio':
        console.log(`El mes actual es ${mes_lower}`);

        break;
    case 'julio':
        console.log(`El mes actual es ${mes_lower}`);

        break;
    case 'agosto':
        console.log(`El mes actual es ${mes_lower}`);

        break;

    default:
        console.log(`El mes ingresado no existe`);
        break;
}
