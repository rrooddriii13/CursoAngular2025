

const habilidades: string[] = ['Golpe', 'Contraataque', 'Curación'];


// Definición de un objeto con una interfaz para decir los tipos
//La interfaz Personaje se usa para definir la forma que debe tener un objeto en ts.
interface Personaje {
    nombre: string;
    vida: number;
    habilidades: string[];
    ciudadNatal?: string;   // el "?" significa que es opcional
}

const montaraz: Personaje = {
    nombre: 'Montaraz',
    vida: 100,
    habilidades: ['Golpe', 'Contraataque'],
};

montaraz.ciudadNatal = 'Rivendel';

console.log("formato tabla");

console.table(montaraz);
console.log('Acabado el 2-object-interface');


export {};
