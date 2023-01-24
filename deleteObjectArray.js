//Lista inventario
const lista = [{ id: 1, nombre: 'kevin'}, { id: 2, nombre: 'sebastian' }, { id: 3, nombre: 'maria' }, { id: 4, nombre: 'pablo' }];

//Este es el objeto que quieres insertar
const obj = { id: 4 };
let nombre = 'maria';

const obtenerIndiceObjeto = (matriz, id) => {
    let indiceObjeto = matriz.findIndex((object) => {
        return object.nombre === id;
      });
      return indiceObjeto;
}

let indice = obtenerIndiceObjeto(lista, nombre);
// let indice2 = obtenerIndiceObjeto(lista);
lista.splice(indice, 1);
// delete lista[indice]
// console.log(lista.length)
console.log(lista)
// console.log(indice2)


//Si devuelve -1 no se encontro el objeto
// if (indiceObjeto === -1) {
//     console.log("No se encontro el objeto, es decir se agrega");
//     lista.push(obj)
//     console.table(lista)
// } else {
//     console.log("Objeto Encontrado");
//     console.log("Reemplazar los valores de la propiedad del indice: " + indiceObjeto)
//     delete lista[indiceObjeto]
//     // lista[indiceObjeto].id = 20
//     console.table(lista)
// }
