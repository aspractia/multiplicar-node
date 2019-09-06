const fs = require('fs');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (limite < 1)
            reject("Limite no permitido");

        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${ base } x ${ i } = ${ base*i }\n`;
        }

        resolve(data);

    });
};


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += base + " x " + i + " = " + (base * i) + "\n";
        }

        fs.writeFile('tabla.txt', data, 'utf8',
            callback = (err) => {

                if (err)
                    reject("Ha ocurrido un error: ");

                resolve("El archivo ha sido creado");
            }
        );

    });
};

module.exports = {
    crearArchivo,
    listarTabla
}