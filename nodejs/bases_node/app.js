const { crearArchivo } = require('./helpers/multiplicar')
console.clear();
const base = 10;

crearArchivo(base)
    .then(nameArchivo => console.log(nameArchivo, 'creado'))
    .catch(err =>  console.log(err));
