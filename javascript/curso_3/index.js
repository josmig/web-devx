//Spread Operator -> copia un "objeto"

let a = [1,2,3,4,5,6];
let b = [7,8,9,10];

const c = [...a,...b];
console.log(c);

const persona = {
  nombre: 'Jose',
  edad:23
};
const persona1 = {
  nombre:'Pepe',
  edad:20
}

const persona2 = {...persona};
const persona3 = {...persona1};
console.log(persona2);
console.log(persona3);

//Manera sincrona de resolver casos
  //Promesas Resolve y Then
  //resolve ->  resuelve el valor de cadenas de la promesa
  Promise.resolve(2)
    .then(valor =>  valor + 1)
    .then( valor => console.log(valor))
    .then(valor => valor - 2)
    .then(valor => console.log(valor))
    .catch(err => err);

  // reject -> para recharza la cadena de promesas
  //.catch --> resivira un mensaje de error

  Promise.reject(2)
    .then(valor =>  valor + 1)
    .then(valor => console.log(valor))
    .catch(e => console.error(e));

  //FOrmas de usar estas promesas, se puede utilizar el valor de Resolve y Reject en la misma promesa+
  Promise.resolve(2)
    .then(valor => Promise.reject(1))
    .then(valor => valor +1)
    .then(valor => console.log(valor));

//Manera de hacer de manera asincrona
new Promise((resolve,reject) =>{
  setTimeout(() => resolve(),1000)
}). then(x => console.log(x))
  .catch(e  => console.error(e))
