
//Los decoradores sirven para añadir funcionalidades

//@Decorador
class Clase{
  public miPropiedad: string ='ABCD123';
  imprimir(){
    console.log(this.miPropiedad);

  }
}

interface Pasajero {
  nombre: string;
  hijos?: string[];
}
const pasajero1: Pasajero ={
  nombre:'Fernando'
}

const pasajero2: Pasajero = {
  nombre: 'Amelia',
  hijos: ['Pepe','Lucho']
}

function imprimeHijos(pasajero: Pasajero): void{
  //si existen los hijos mandas y si no mandas 0
    const cuantos = pasajero.hijos?.length || 0;
    console.log(cuantos);
}

imprimeHijos(pasajero1);
