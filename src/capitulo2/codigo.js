// arrays
// son como contenedores

let frutas = ["platano", "manzana", "mango", "uva", 5, 9, "pedro"];
//  en los arrays lo que no esta definido se muestra como undefined
// ejemplo imprimir posicion 19 de array de 5, no da error da undefinided
document.write(frutas[4] + "<br>");
console.log(frutas);


// arrays asociativos
// son como formato Json
let pc = {
    nombre: "renePc",
    procesador: "Ryzen5 3200",
    ram: "16GB",
    espacio:"16TB"
};

// document.write(pc["ram"]);
let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];
// tambien se puede asi let nombre =  pc.nombre;
let frase = `el nombre de mi equipo es: ${nombre} <br>
el procesador es: ${procesador} <br>
la ram es: ${ram} <br>
el espacio es: ${espacio} <br>`;

document.write(frase);
// me quede en el min 2:23 voy a empezar con bucles