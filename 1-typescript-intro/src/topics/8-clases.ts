export class Persona {
    // public nombre: string;
    //varias maneras inicializar las propiedades
    // public nombre?: string;
    // public nombre: string | undefined;
    //io constructor

    // private direccion: string;

    constructor( 
        public nombre: string, 
        public apellido: string, 
        private direccion: string = 'Sin dirección'
    ) {}
}

//cojo  lo de persona y lo extiendo es decir heredo todo lo de persona
// export class Heroe extends Persona {

//     constructor(
//         public alterEgo: string,
//         public edad: number, 
//         public nombreReal: string,
//     ) {
//super es el contrustor del padre es decir de persona 
//         super( nombreReal, 'Nueva York' );
//     }

// }

export class Heroe {

    constructor(
        public alterEgo: string,
        public edad: number, 
        public nombreReal: string,
        public persona: Persona,
    ) {
        // this.persona = new Persona(nombreReal);
    }

}

const tony = new Persona('Tony', 'Stark', 'Nueva York');

const ironman = new Heroe('Ironman', 45, 'Tony', tony);

console.log(ironman);
