

//GENERICOS = TIPO DE DATO QUE SE DEFINE AL MOMENTO DE LLAMAR LA FUNCION

//T es una convencion, pero puede ser cualquier letra
//el <T> indica que es un tipo generico
//el argumento es de tipo T y la funcion retorna un valor de tipo T
export function cualEsMiTipo<T>( argumento: T ): T {
    return argumento;
}

const soyString = cualEsMiTipo<string>('Hola Mundo');
const soyNumero = cualEsMiTipo<number>(100);
const soyArreglo  = cualEsMiTipo<number[]>([1,2,3,4,5]);

console.log( soyString.split(' ') );
//toFixed es un metodo de los numeros que formatea un numero usando notacion de punto fijo
console.log( soyNumero.toFixed() );
//.join es un metodo de los arreglos que une todos los elementos de un arreglo en una cadena y los separa por el separador especificado
console.log( soyArreglo.join('-') );
