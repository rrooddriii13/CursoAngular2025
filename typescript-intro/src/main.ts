import './style.css'


//no se ve xq no hago referencia al basic types
// import './topics/1-basic-types'
// import './topics/2-object-interface'
// import './topics/3-functions'
// import './topics/4-tarea-tipos.ts'
//import './topics/5-desestructuracion-basica.ts'
// import './topics/6-desestructuracion-funciones.ts'
// import './topics/7-import-export.ts'
// import './topics/8-clases.ts'
// import './topics/9-genericos.ts'
import './topics/10-decoradores.ts'

// video 11 hols mundo 
const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `Hola Mundo`;

// console.log("Hola Mundo");

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


///un modulo es un archivo ts q tiene import o exports
///un namespace es una forma de agrupar codigo 
///un espacio de nombres es un contenedor que permite organizar el codigo en bloques logicos y evitar conflictos de nombres en el ambito global
///un namespace se define con la palabra reservada namespace seguida del nombre del espacio de nombres y un bloque de codigo encerrado entre llaves {}

//necesitas imporatr algo de un modulo
///un modulo es un agrupacion encapsulada de codigo que puede exportar e importar funcionalidades como variables, funciones, clases o interfaces entre diferentes archivos.
///un modulo se define en un archivo separado y utiliza las palabras reservadas import y export para compartir codigo entre modulos.