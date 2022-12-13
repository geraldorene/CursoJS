// ejercicio que 1, perdir que ingerse el monto y mostrar el mas 
// caro que pueden comprar, si hay 2 o mas mostrar ambos, indicar el cambio

let dineroCofla = prompt("cuanto dinero tiene cofla? ");
// para poder hacer operacion de resta es necesario parsear el num
dineroCofla = parseFloat(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("cofla comprate el helado de awa");
    alert("y te sobra " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("cofla comprate el helado de heladix");
    alert("y te sobra " + (dineroCofla - 1));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("cofla comprate el helado de heladovich");
    alert("y te sobra " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("comprate el helado de helardo");
    alert("y te sobra " + (dineroCofla - 1.8));
} 
else if (dineroCofla >= 2.9) {
    alert("cofla comprate el helado de confites o el pote ");
    alert("y te sobra " + (dineroCofla - 2.9));
}else {
    alert(" cofla no te alcanza pobre de mierda ");
}

// vas en el minuto 2:00

// let dineroPedro = prompt("cuanto dinero tiene pedro? ");

// if (dineroPedro >= 0.6 && dineroCofla < 1) {
//     alert("Pedro comprate el helado de awa");
// }
// else if (dineroPedro >= 1 && dineroCofla < 1.6) {
//     alert("Pedrocomprate el helado de heladix");
// }
// else if (dineroPedro>= 1.7 && dineroCofla < 1.8) {
//     alert("Pedro comprate el helado de heladovich");
// }
// else if (dineroPedro >= 1.8 && dineroCofla < 2.9) {
//     alert("Pedro el helado de helardo");
// } 
// else if (dineroPedro >= 2.9) {
//     alert("Pedro comprate el helado de confites o el pote ");
// }else {
//     alert("Pedro no te alcanza pobre de mierda ");
// }

// let dineroRoberto = prompt("cuanto dinero tiene roberto? ");


// if (dineroRoberto >= 0.6 && dineroCofla < 1) {
//     alert("Roberto comprate el helado de awa");
// }
// else if (dineroRoberto >= 1 && dineroCofla < 1.6) {
//     alert("Roberto comprate el helado de heladix");
// }
// else if (dineroRoberto >= 1.7 && dineroCofla < 1.8) {
//     alert("Roberto comprate el helado de heladovich");
// }
// else if (dineroRoberto >= 1.8 && dineroCofla < 2.9) {
//     alert("Roberto comprate el helado de helardo");
// } 
// else if (dineroRoberto >= 2.9) {
//     alert("Roberto comprate el helado de confites o el pote ");
// }else {
//     alert("Roberto no te alcanza pobre de mierda ");
// }