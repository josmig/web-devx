//file system
const fs = require('fs');
const colors = require('colors');

const crearOperacion = async (base = 8, listar= false,hasta=11) => {

    try {
        

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${'X'.green} ${i} = ${base * i}\n`;
            consola += `${base} * ${i} = ${base * i}\n`;
        }
        
        if(listar){
            console.log('================='.yellow);
            console.log(`  TABLA del ${base}  `.green);
            console.log('================='.bgRed);
            console.log(salida);

        }
        
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, consola);
        return `Tabla-${base}.txt CREADA!`;

        /* fs.writeFile(`Tabla-${base}.txt`, salida, (err)=>{
            if(err) throw err;
            console.log(`Tabla-${base}.txt CREADO CTMR!!`);
        }) */
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    crearArchivo: crearOperacion
}