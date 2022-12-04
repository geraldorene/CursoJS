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
frase2 = `soy ${nombre} y estoy caminando`;
console.log(frase2);
// document.write(frase2);

// vas en el min 1:13


