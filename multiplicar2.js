const argv = require('./configYargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar'); // No se acostumbra a poner el .js
const colors = require('colors');

switch (argv._[0]) {

    case 'listar':

        listarTabla(argv.base, argv.limite).then(mensaje => {
                console.log(mensaje.red); // Lo imprimo rojo gracias al package colors
            })
            .catch(err => {
                console.log("Error: ", err);
            })

        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite).then(mensaje => {
                console.log(mensaje)
            })
            .catch(err => {
                console.log("Error: ", err);
            })

        break;

    default:
        console.log("Comando no reconocido");
}