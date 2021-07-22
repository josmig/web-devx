//Clases basicas
/*
  private -> Solo visible dentro de esta clase
  public -> Afuerea de la clase cualquier podra ver la clase
  static -> Usar la propiedad sin hacer instancia de la clase
  default -> por defecto es publico
*/

class PersonaNormal{
  constructor(
    nombre: string,
    direccion: string,
  ){}
}

class Heroe extends PersonaNormal {
   /**nombre: string;
   edad: number;
   nombreReal: number;¨*/

   //Una funciona que se llaman cuando creamos una instancia de unuestra clase
   /**constructor( nombre: string){

   }*/
   //Forma mas corta
   constructor(
     public nombreHeroe: string,
     public edad: number,
     public nombreReal:string
   ) {
     super(nombreReal,'New York 159');
   }
}

//const ironman= new Heroe('Iron Man',22);
//console.log(ironman);
