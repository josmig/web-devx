

interface Producto{
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: 'Alcatel',
  precio: 150
}
const telefono2: Producto ={
  desc: 'Motorola',
  precio: 200
}


export function calculaISV( productos: Producto[]): [number,number]{
  let total = 0;
  productos.forEach( ({precio}) => {
    total += precio;
  });
  return [total,total * 0.15];
}


const articulos = [telefono, telefono2];
const [total,isv] = calculaISV(articulos);

console.log('Total : ' + total);
console.log('ISV :' , isv);
