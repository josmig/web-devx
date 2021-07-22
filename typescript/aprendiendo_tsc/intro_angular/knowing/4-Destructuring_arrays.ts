

const dbz: string[] =['Goku','Vegeta','Krilin','Picoro'];
//forma de llamar (antigua)
console.log('Personaje 1 : ' + dbz[0]);
console.log('Personaje 2 : ' + dbz[1]);

//Para destructura un arreglo sehace con llaves cuadradas
//En la destructuracion de arreglos no es importante el valor del objeto como en destructuracion  de objetos, podemos pner el valor que queramos
//const [goku,vegeta] = dbz; //Forma de objetos

const [p1,p2,p3] = dbz;

//cuando quiero un valo en especifico digamos el 3 se deja un espaciado
const [, , hol1] = dbz;
