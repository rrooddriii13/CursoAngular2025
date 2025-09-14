function sumarNumeros(a: number, b: number): number {
    return a + b;
}

//klo mismo pero con funcion de flecha c
const sumarNumerosFlecha = (a: number, b: number): string => {
    return `${a + b}`;
}

//1 num obligatorio 2 opcional 3 con valor por defecto
function multiplicar(primerNumero: number, segundoNumero?: number, base: number = 2) {
    return primerNumero * base;
}

// const resultado: number = sumarNumeros(1, 2);
// const resultado2: string = sumarNumerosFlecha(1, 2);
// const resultadoMultiplicacion: number = multiplicar(5);

// //{} pa q salga como un objeto en la consola
// console.log({ resultado, resultado2, resultadoMultiplicacion })

//video 15

interface Personaje {
    nombre: string;
    puntosVida: number;
    //una funcion q no retorna nada
    mostrarVida: () => void;
}

const curarPersonaje = (personaje: Personaje, cantidadCurar: number) => {
    personaje.puntosVida += cantidadCurar;
}

const montaraz: Personaje = {
    nombre: 'Montaraz',
    puntosVida: 50,
    mostrarVida() {
        console.log(`Puntos de vida: ${this.puntosVida}`);
    }
}

curarPersonaje(montaraz, 10);
curarPersonaje(montaraz, 50);

montaraz.mostrarVida();

export {};
