
//2.1.
const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...

jedi.edad=25;

console.log(jedi.edad);

//2.2.
let name= "Leia";
let surname= "Organa";
let age= 20;

//console.log(`Soy ${name} ${surname}, tengo ${age} años y soy una princesa de Alderaan.`);
console.log("Soy"+ " " + name + " " + surname + " " + ", tengo" + " " + age + " " + "años y soy una princesa de Alderaan.");

//2.3.
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...

let totalPrice = sable1.precio + sable2.precio;

console.log(totalPrice);

//2.4.
let precioBaseGlobal = 10000;

precioBaseGlobal = 25000;  // Cambia el precio base en esta linea modificando la variable


const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...

nave1.precioFinal = precioBaseGlobal + nave1.precioBase;
nave2.precioFinal = precioBaseGlobal + nave2.precioBase;

console.log(nave1.precioFinal);
console.log(nave2.precioFinal);

