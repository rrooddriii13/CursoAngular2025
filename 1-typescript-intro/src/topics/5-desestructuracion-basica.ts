interface ReproductorAudio {
    volumen: number;
    duracion: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductorAudio: ReproductorAudio = {
    volumen: 90,
    duracion: 36,
    cancion: "Mess",
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const cancion = 'Nueva Canción';

const { cancion: otraCancion, duracion, detalles } = reproductorAudio;
const { autor } = detalles;

// console.log('Canción: ', otraCancion );
// console.log('Duración: ', duracion );
// console.log('Autor: ', reproductorAudio.detalles.autor );
// console.log('Autor: ', autor );

// Ejemplo de desestructuración de un arreglo
// Creamos un array con tres elementos (en este caso, solo 2 definidos)
const [ , , trunks = 'No encontrado' ]: string[] = ['Goku','Vegeta'];
// ↑ 1 "Goku", 2 "Vegeta", 3er elemento no existe Como no existe, se usa el valor por defecto: "No encontrado"
console.error('Personaje 3:', trunks );

export {};
 