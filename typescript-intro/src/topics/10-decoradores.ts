
// Decoradores de clase sirven para modificar o extender el comportamiento de una clase
// un decorador es una funcion q se aplica a una clase, metodo, propiedad o parametro
// la funcion recibe como argumento la clase, metodo, propiedad o parametro al q se aplica el decorador
// puede modificar o extender el comportamiento de la clase, metodo, propiedad o parametro
// se define con el simbolo @ seguido del nombre del decorador

// se aplica a la clase
// se ejecuta cuando la clase es definida, no cuando es instanciada
// puede modificar la clase

function decoradorDeClase<T extends { new (...args:any[]): {} }>(
    constructor: T
) {
    //devuelve una nueva clase q extiende de la clase original
    return class extends constructor {
        nuevaPropiedad = 'Nueva Propiedad';
        hola = 'sobrescrito';
    }
}

@decoradorDeClase
export class SuperClase {

    public miPropiedad: string = 'Abc123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log( SuperClase );

const miClase = new SuperClase();
console.log( miClase );
