export interface Producto {
    descripcion: string;
    precio: number;
}

const telefono: Producto = {
    descripcion: 'Nokia A1',
    precio: 150.0
}

const tableta: Producto = {
    descripcion: 'iPad Air',
    precio: 250.0
}

//obj q tiene el impuesto y los productos q espera un array de productos e impuestos numero 
interface OpcionesCalculoImpuesto {
    impuesto: number;
    productos: Producto[];
}

// function calcularImpuesto( opciones: OpcionesCalculoImpuesto ): [number, number] {
// function calcularImpuesto({ impuesto, productos }: OpcionesCalculoImpuesto ): [number, number] {
export function calcularImpuesto(opciones: OpcionesCalculoImpuesto): [number, number] {

    const { impuesto, productos } = opciones;

    let total = 0;

    productos.forEach(({ precio }) => {
        total += precio;
    });

    return [total, total * impuesto];
}

//const q es lo  selecciono carrito compra telefono y tableta
const carritoCompras = [telefono, tableta];
const impuesto = 0.15;

const [ total, totalImpuesto ] = calcularImpuesto({
    productos: carritoCompras,
    impuesto: impuesto,
});

console.log('Total', total );
console.log('Impuesto total', totalImpuesto );

