var nombre = prompt("Ingresa tu nombre");
var peso = parseFloat(prompt("Ingrese su peso en kilos"));
let Peso_En_Gramos = peso * 1000;
const Peso_Promedio = 70;
var Estas_Gordo = peso > Peso_Promedio;
let resultado_Logico = Estas_Gordo && true;

console.log("Nombre:", nombre);
console.log("Tu peso es:", peso);
console.log("Tu peso en gramos es:", Peso_En_Gramos);
console.log("¿Estás gordo?:", Estas_Gordo);
console.log("Resultado lógico (Estas_Gordo && true):", resultado_Logico);

