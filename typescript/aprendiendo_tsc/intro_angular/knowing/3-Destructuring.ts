
interface Reproductor{
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}
interface Detalles{
  autor: string;
  anio: number;
}

const reproductor: Reproductor ={
  volumen : 90,
  segundo: 36,
  cancion: 'Sin aliento',
  detalles: {
    autor:'Danza Invisible',
    anio: 1990
  }
}

/**console.log("El valor acutal de volumen es  : " + reproductor.volumen);
console.log("El valor acutal de segundo es  : " + reproductor.segundo);
console.log("El valor acutal de cancion es  : " + reproductor.cancion);
console.log("El valor acutal de autor es  : " + reproductor.detalles.autor);**/

const {volumen: vol, segundo, cancion , detalles: {autor}} = reproductor;
//const {autor} = detalles;

console.log("El valor acutal de volumen es  : " + vol);
console.log("El valor actual de segundo es : "+ segundo);
console.log("El valor actual de cancion es : "+ cancion);
console.log("El valor de detalles es : " + autor);
