

//Funciones
const suma = (a:number ,b:number): number=>{
  return a+b;
}
console.log(suma(2,2));

const operacion = (a:number, otroNumero?:number , b:number = 2): number => a*b;
const resultado = operacion(2,3);
console.log(resultado);

//Funciones con objetos como argumentos
//Las interfaces ayudan a saber que valores tendra un objeto. No interfiere en JS ni navegador ,
//nos ayuda a cumplir con ciertas reglas que le asignanos

interface PersonajeLOR {
   nombre: string;
   pv: number;
   mostrarHP: () => void;
}
function curar( personaje: PersonajeLOR, curarX: number): void{
  //en JS siempre retorna algo (undefined)
  personaje.pv += curarX;
  console.log( personaje );
}
const nuevoPersonaje: PersonajeLOR = {
  nombre: 'Strider',
  pv:50,
  mostrarHP(){
    console.log("Puntos de vida" , this.pv);    
  }
}

curar(nuevoPersonaje,20);
