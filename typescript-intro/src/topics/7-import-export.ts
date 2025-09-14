//no vamos a poner export aqqui 

import {  calcularImpuesto, type Producto } from './6-desestructuracion-funciones';

const carritoCompras: Producto[] = [
    {
        descripcion: 'Nokia',
        precio: 100
    },
    {
        descripcion: 'iPad',
        precio: 150
    }
];

// Impuesto = 0.15
const [ total, impuesto ] = calcularImpuesto({
    productos: carritoCompras,
    impuesto: 0.15
});

console.log('Total', total);
console.log('Impuesto', impuesto);
