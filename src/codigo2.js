// concatenacion 
saludo = "hola pedro! ";
pregunta = "como estas?"; 

frase = saludo + pregunta;
console.log(frase);

// para concatenar numeros hay que forzarlos a string
numero1 = 1;
numero2 = 3;

// cuando se detecta texto "" hace en cadena de texto todo 
frase = "" + numero1 + numero2;
console.log(frase);

// concat : es una funcion que sirve para concatenar 
// pero debe de haber almenos un string

// frase = numero1.concat(numero2);
console.log(frase);

// concatenar con backtiks y la variable entre ${}
nombre = "Rene Geraldo";
frase2 = "Soy " + nombre + " y estoy caminando";
console.log(frase2);

//  los backticks funcionan cin las comillas '' 
// en mi teclado es con fn + alt + esc
// con los backticks puedes poner codigo html sin problema
frase2 = `soy  ${nombre}  y estoy caminando`;
console.log(frase2);
// document.write(frase2);

// vas en el min 1:13
// escape de comillas simples y dobles 
// para poner "" en un texto debes de ponerlo entre '' y viceversa

// frase3 = "mi name es 'rene' y soy un crack";
// console.log(frase3);
// frase3 = 'mi name es "Rene" y soy un crack';

// vas en el min 1:16
//operadores 
// de comparacion 

let num1 = 23;
let num2 = 13;

let num3 = "23";
let txt1 = "texto 1";
let txt2 = "texto 2";

// para comparar algo es == pero no importa el tipo de dato
console.log(num1 == num2);

// diferencia es != 
console.log(txt1 != txt2);

// compara que sean estrictamente iguales === tipo de dato y todo
console.log(num1 === num3);

// compara si no es estrictamente igiual !==
console.log(num1 !== num3);

// logicos
let valor = true;
let valor2 = true;

// todo debe de ser verdadero
let resultado = valor && valor2;
// se cumple si almenos uno es verdadero
let resultado2 = valor || valor2;

// cambia el valor
let x = 123;
let y = 123;

resultado3 = x == y;
 
console.log(resultado);
console.log(resultado2);
console.log(!resultado3);

// vas en el minuto 1:34

// camel case se usa en js
// ejempl camelCase

// condicionales sentencias
// ejemplo
// let nombre = "Rene Geraldo"
// siempre se ejecuta el primer if 
if(nombre == "rene"){
    console.log('se cumple la sentencia' + nombre);
}
// else if puede haber x, if solo 1 igual que else 
else if (nombre == "Geraldo"){
    console.log("tu nombre es " + nombre );
}else{
    console.log("tu nombre es " + nombre);
}

