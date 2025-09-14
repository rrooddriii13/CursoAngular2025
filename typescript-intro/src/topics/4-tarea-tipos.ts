interface SuperHeroe {
    nombre: string;
    edad: number;
    //direccion  es la interfaz Direccion 
    direccion: Direccion;
    mostrarDireccion: () => string;
}
//si seleciono una prop o variable o nombre func le doy a fn + f2 y se cambia todas coincidencias
interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    //direccion es un objeto anidado
    direccion: {
        calle: 'Calle Principal',
        pais: 'EEUU',
        ciudad: 'Nueva York'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

console.log();


const direccion = superHeroe.mostrarDireccion();
console.log(direccion);

export {};
  