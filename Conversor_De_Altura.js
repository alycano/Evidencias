var nombre = prompt("Ingresa tu nombre:");
let estatura = parseFloat(prompt("Ingresa tu estatura"));
let Edad_En_Centimetros = estatura * 100;
let Edad_En_Milimetros = estatura * 1000;
const Altura_Rerefencia = 1.5;
let Eres_Alto = estatura > Altura_Rerefencia;
let Sin_Valor;
console.log("Nombre:", nombre);
console.log("Estatura en metros:", estatura)
console.log("Estatura en centrimetros:", Edad_En_Centimetros)
console.log("Estatura en milimetros:", Edad_En_Milimetros)
console.log("¿Es alta (> 1.5 m)?", Eres_Alto);
console.log("Variable sin asignar:", Sin_Valor);

