
let habilidades: string[] = ["Bash","Counter","Heiling"];

interface Personaje{
  nombre:string;
  hp:number;
  habilidades:string[];
  puebloNatal?: string; //valores opcionales - no requeridos
}
const personaje: Personaje = {
  hp:100,
  nombre: 'Miguel',
  habilidades : ['Java','JS','UX'],
}

personaje.puebloNatal = 'Pueblo paleta';
