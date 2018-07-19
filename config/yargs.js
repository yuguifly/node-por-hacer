const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
        default: true,
        alias: 'c',
        desc: 'Marcar como completado o pendiente la tarear'
    }
    //Forma sin OPTIMIZAR con objetos
    // const argv = require('yargs')
    //     .command('crear', 'Imprime en consola la tabla de multipilcar', {
    //         descripcion: {
    //             demand: true,
    //             alias: 'd',
    //             desc: 'Descripción de la tarea por hacer'
    //         }
    //     })
    //     .command('actualizar', 'Guardamos en un fichero', {
    //         descripcion: {
    //             demand: true,
    //             alias: 'd',
    //             desc: 'Descripción de la tarea por hacer'
    //         },
    //         completado: {
    //             default: true,
    //             alias: 'c',
    //             desc: 'Marcar como completado o pendiente la tarear'

//         }
//     })
//     .command('borrar', 'Borramos un elemento del fichero', {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: 'Descripción de la tarea a borrar'
//         }
//     })
//FORMA OPTIMIZADA con Objetos
const argv = require('yargs')
    .command('crear', 'Imprime en consola la tabla de multipilcar', {
        descripcion
    })
    .command('actualizar', 'Guardamos en un fichero', {
        descripcion,
        completado
    })
    .command('borrar', 'Borramos un elemento del fichero', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}