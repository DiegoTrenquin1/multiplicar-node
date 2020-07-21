//Requireds
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        console.log('listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(arhivo => console.log(`Achivo creado: ${archivo}`))
            .catch(e => console.log(e));
        console.log('Crear');
        break;
    default:
        console.log('Comando no reconocido');
}

console.log(argv);

//const fs = require('express');
//const fs = require('./');

//let base = '4';

/* console.log(process.argv); */
/* let argv2 = process.argv;
console.log('limite', argv.base.limite); */

/* let parametro = argv[2];
let base = parametro.split('=')[1];
 */


/* crearArchivo(base)
    .then(arhivo => console.log(`Achivo creado: ${archivo}`))
    .catch(e => console.log(e)); */