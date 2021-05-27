//Ejercicios javascript
//Prácticas con variables
//Comenzamos con JS:

//1. HECHO - Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
const mensaje = alert('Un mensaje');

//2. HECHO - Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
const holaMundo = document.write('Hello World '); 

//3. HECHO - Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
const suma = document.write(3 + 5)

//4. HECHO - Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
let nombreUsuario = prompt('Ingrese un nombre');
document.write(' Hola ' + nombreUsuario + ' ');

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
//Nota: Tener en cuenta la siguiente función: parseInt
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
let primerNumero = parseInt(prompt('Ingrese un numero'));
let segundoNumero = parseInt(prompt('Ingrese un numero'));
document.write(primerNumero + segundoNumero)

//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let numeroPrimero = parseInt(prompt('Ingrese un numero'));
let numeroSegundo = parseInt(prompt('Ingrese un numero'));

if(numeroPrimero > numeroSegundo){
    console.log(numeroPrimero + ' es mayor que ' + numeroSegundo);
}else{
    console.log(numeroSegundo + ' es mayor que ' + numeroPrimero);
}

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let firstNumber = parseInt(prompt('Ingrese un numero'));
let secondNumber = parseInt(prompt('Ingrese un numero'));
let thirdNumber = parseInt(prompt('Ingrese un numero'));

if(firstNumber > secondNumber && firstNumber > thirdNumber){
    console.log(firstNumber + ' is the biggest');
} else if(secondNumber > firstNumber && secondNumber > thirdNumber){
    console.log(secondNumber + ' is the biggest');
} else {
    console.log(thirdNumber + ' is the biggest');
}

//8.- Escribe un programa que pida un número y diga si es divisible por 2 
//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substr. (developer mozilla)
//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) 
//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
