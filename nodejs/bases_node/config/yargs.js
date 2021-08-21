const yargs = require('yargs')
    .option('b', {
        alias:'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        demandOption: true,
        default:false,
        describe:'Muestra la tabla en consola'
    })
    .option('h', {
        alias:'hasta',
        type:'number',
        default:10,
        describe:'Hasta que valor quieres que se multiplique'
    })
    .check( (argv, options) =>{
        if(isNaN (argv.b)){
            throw 'La base tiene que ser de tipo Number';
        }
        return true;
    })
    .argv;

module.exports = yargs;