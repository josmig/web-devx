
interface Hero{
  nombre: string;
  edad: number;
  direccion: Direccion;
  mostrarDireccion: () => string;
}
interface Direccion{
  calle: string;
  pais: string;
  ciudad: string;
}

const superHeroe: Hero = {
  nombre:'Spiderman',
  edad:33,
  direccion :{
    calle:'Main St',
    pais:'USA',
    ciudad:'New York',    
  },
  mostrarDireccion(){
    return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
  }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
