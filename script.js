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

if (numeroPrimero > numeroSegundo) {
    console.log(numeroPrimero + ' es mayor que ' + numeroSegundo);
} else {
    console.log(numeroSegundo + ' es mayor que ' + numeroPrimero);
}

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let firstNumber = parseInt(prompt('Ingrese un numero'));
let secondNumber = parseInt(prompt('Ingrese un numero'));
let thirdNumber = parseInt(prompt('Ingrese un numero'));

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log(firstNumber + ' is the biggest');
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    console.log(secondNumber + ' is the biggest');
} else {
    console.log(thirdNumber + ' is the biggest');
}

//8.- Escribe un programa que pida un número y diga si es divisible por 2 
let number = parseInt(prompt('Ingrese un numero'));

if (number % 2 === 0) {
    console.log(number + ' es divisible en 2');
} else {
    console.log(number + ' no es divisible en 2');
}

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substr. (developer mozilla)
let sentence = prompt('Ingrese una oracion');
let sentenceLength = sentence.length;

for (i = 0; i < sentenceLength; i++) {
    if (sentence.substr(i, 1) === "a" || sentence.substr(i, 1) === "e" || sentence.substr(i, 1) === "i" || sentence.substr(i, 1) === "o" || sentence.substr(i, 1) === "u") {
        console.log(sentence.substr(i, 1));
    }
}

//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) 
let numberFirst = parseInt(prompt('Ingrese un numero'));

if (numberFirst % 2 === 0 || numberFirst % 3 === 0 || numberFirst % 5 === 0 || numberFirst % 7 === 0) {
    console.log(numberFirst + ' es divisible en 2, 3, 5 o 7');
} else {
    console.log(numberFirst + ' no es divisible en 2, 3, 5 o 7');
}

//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let n1 = parceInt(prompt("Escribe un número"));

if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
    if (n1 % 2 === 0) {
        console.log("Es divisible por 2. ");
    }
    if (n1 % 3 === 0) {
        console.log("Es divisible por 3. ");
    }
    if (n1 % 5 === 0) {
        console.log("Es divisible por 5. ");
    }
    if (n1 % 7 === 0) {
        console.log("Es divisible por 7. ");
    }
} else {
    console.log("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}


