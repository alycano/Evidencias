// Solicitar nombre y edad al usuario
var nombre = prompt("Ingresa tu nombre:");
let edad = parseInt(prompt("Ingresa tu edad:"));

// Constante de días por año
const DIAS_POR_ANIO = 365;

// Calcular edad en días
let edadEnDias = edad * DIAS_POR_ANIO;

// Verificar si el nombre es corto (menos de 5 caracteres)
let nombreCorto = nombre.length < 5;

// Declarar una variable con valor null
let valorNulo = null;

// Mostrar resultados en la consola
console.log("Nombre:", nombre);
console.log("Edad (en años):", edad);
console.log("Edad en días:", edadEnDias);
console.log("¿El nombre es corto (<5 letras)?", nombreCorto);
console.log("Valor nulo:", valorNulo);