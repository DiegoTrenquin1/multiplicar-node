const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un número');
            return;
        }
        console.log('===================='.green);
        console.log('====tabla de multiplica'.green);

        let tabla = '';
        for (var i = 1; i <= limite; i++) {

            console.log(`${base} *${i} = ${base*i}\n`);
        }
        resolve(tabla);


    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);

        });
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}