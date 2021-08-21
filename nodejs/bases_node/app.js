const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();
/* const base = 4; */

/* console.log(process.argv ); */
/* console.log( yargs );
console.log('base : yargs', yargs.base); */

crearArchivo(argv.b, argv.l, argv.h)
    .then(nameArchivo => console.log(nameArchivo.rainbow, 'creado'))
    .catch(err =>  console.log(err));














/* const base = 8; */
/* 
const [,,arg3  = "base=5"] = process.argv;
const [, base = '5'] = arg3.split('=');
 */
/* console.log(arg3); */
/* console.log(base);
 */
