//Arrow functions
//Nivel 1
//Ejercicio 1
let add = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

let addOnclick = () => {
  let userFirstNumber = parseFloat(
    document.getElementById('firstNumber').value,
  );
  let userSecondNumber = parseFloat(
    document.getElementById('secondNumber').value,
  );
  let result = add(userFirstNumber, userSecondNumber);
  console.log('este es el resultado de la suma: ' + result);

  document.getElementById('addAnswer').innerHTML = result;
};

//Ejercicio 2
let randomNumber = () => {
  let generateRandomNumber = Math.floor(Math.random() * 101);
  return generateRandomNumber;
};
let creatRandomNumber = () => {
  let randomNumberAnswer = randomNumber();
  console.log(' tu random número es:' + randomNumberAnswer);
  document.getElementById('resultRandomNumber').innerHTML = randomNumberAnswer;
};
//ejercicio 3

class Person {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(`hi ${this.name}`);
    return `hi ${this.name}`;
  };
}
function sayHi() {
  let newPerson = new Person('Mark');

  let sayHi = newPerson.greet();
  document.getElementById('hi').innerHTML = sayHi;
}

//Nivel 2
//Ejercicio 4
//Función de flecha dentro de un loop: Crea una función llamada
//printNumbers que acepte un array de números y utilice un loop
// for para imprimir cada número en la consola utilizando una función de flecha.

let printNumbers = () => {
  let arrayNumber = [1, 2, 3, 4];
  let showNumbers = printNumbers(arrayNumber);
  console.log(showNumbers);
};

function showNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    () => console.log(numbers[i]);

    document.getElementById('showNumbers').innerHTML = showNumbers;
  }
  return;
}
//Nivel3
//ejercicio5
let greetings = () => {
  let name = 'Mia';

  console.log(`Hola ${name}, bienvenida`);

  return `Hola ${name}, bienvenida`;
};

function showNote() {
  let noteName = greetings();
  document.getElementById('showNote').innerHTML = noteName;
}
function time() {
  setTimeout(showNote, 3000);
}

//Ejercicio 1.2:
//nivel 1
//ejercicio 1

function puedeConducir() {
  let userAge = parseFloat(document.getElementById('userAge').value);
  let answer = userAge >= 18 ? 'Puedes conducir' : 'No puedes conducir';
  console.log(answer);
  document.getElementById('showMe').innerHTML = answer;
}
//ejercicio 2

function major() {
  let numberOne = parseFloat(document.getElementById('userFirstNumber').value);

  let numberTwo = parseFloat(document.getElementById('userSecondNumber').value);

  let majorNumber =
    numberOne > numberTwo
      ? `El mayor es el número ${numberOne}`
      : `El mayor es el número ${numberTwo} `;

  console.log(majorNumber);
  document.getElementById('showMajor').innerHTML = majorNumber;
}
//nivel3
//ejercicio4

function parOImpar() {
  let numbers = [1, 3, 5, 4, 2, 7];
  let tiposDeNumeros = '';
  for (let i = 0; i < numbers.length; i++) {
    let parOImpar = numbers[i] % 2 === 0 ? `Es par` : `Es impar`;
    console.log(`El número ${numbers[i]} es ${parOImpar}`);
    tiposDeNumeros += `El número ${numbers[i]} es ${parOImpar}`;
  }
  document.getElementById('showMeTypeNumber').innerHTML = tiposDeNumeros;
}

//Ejercicio 1.3: callback
//nivel 1
//ejercicio 1
//FALTAN TODOS-----------------------------------------------------------

function procesar(num, callback) {
  console.log(`este es mi número: ${num}`);
  callback(num);
}
function myNumber() {
  let myNumber = 5;
  let callFunction = procesar(myNumber);
  document.getElementById('myCallbackNumber').innerHTML = callFunction;
}

//Ejercicio 1.4: Rest & Spread operators:
//ejercicio 1

function ShowArray() {
  let array1 = [1, 2, 3, 4, 5];
  let array2 = [6, 7, 8, 9, 10];
  let allArrays = [...array1, ...array2];
  console.log(allArrays);
  document.getElementById('myArray').innerHTML = allArrays;
}

//ejercicio 2
//POR QUÉ SE EJECUTA SIN DARLE AL BOTON??
function suma(...numbers) {
  let results = 0;

  numbers.forEach(function (number) {
    results = results + number;
  });
  document.getElementById('myNumbersAdding').innerHTML = results;
  return results;
}
function addFunction() {
  console.log(suma(2, 4, 6, 8, 10));
}

//nivel 2
//ejercicio3

function objects() {
  const objeto1 = {
    cafe: 5,
    leche: 10,
  };
  const objeto2 = { ...objeto1 };
  objeto2.leche = 20;
  console.log('estos son los ingredientes que hay: ', objeto1, objeto2);
  document.getElementById('myObjects').innerHTML =
    'estos son los ingredientes que hay: Caja1:' +
    'café:' +
    objeto1.cafe +
    ' grs ' +
    'leche: ' +
    objeto1.leche +
    ' mls.' +
    ' Objeto 2 : café: ' +
    +objeto2.cafe +
    'grs, ' +
    objeto2.leche +
    'mls. ';
}

//ejercicio 4
//FALTA------------------------------------------------------------------

//Nivel 3
//ejercicio 5

function fruits(apples, pears, bannanas) {
  return apples + pears + bannanas;
}

function newFunction() {
  let numberOfFruits = [5, 3, 7];
  let myFruits = fruits(...numberOfFruits);
  console.log(myFruits + ' frutas');
  document.getElementById('myNewFunctionFruits').innerHTML =
    'Tengo ' + myFruits + ' frutas';
}

//ejercicio 6

function myRecipe() {
  const pizzaDough = {
    flour: 500,
    water: 300,
    salt: 1,
  };
  const myPizzaIngredients = {
    ...pizzaDough,
    tomatosauce: 200,
    pepperoni: 300,
    cheese: 500,
  };

  let totalIngredients = myPizzaIngredients;
  console.log('Estos son los ingredientes para mi pizza : ', totalIngredients);
  document.getElementById('myRecipeIngredients').innerHTML =
    'Estos son los ingredientes para mi pizza : <br>' +
    'Flour: ' +
    myPizzaIngredients.flour +
    'grs.<br>' +
    'Water: ' +
    myPizzaIngredients.water +
    'mls.<br>' +
    'Salt: ' +
    myPizzaIngredients.salt +
    'grs.<br>' +
    'Tomato Sauce: ' +
    myPizzaIngredients.tomatosauce +
    ' mls. <br>' +
    'Pepperoni: ' +
    myPizzaIngredients.pepperoni +
    'grs. <br>' +
    'Cheese: ' +
    myPizzaIngredients.cheese +
    'grs.';
}

//Ejercicio 1.5: Array transformations
//nivel 1
//ejercicio 1

function myFunctionMap() {
  let numbers = [3, 4, 6];
  let squerOf = numbers.map((num) => num * num);
  console.log(
    'El cuadrado de los números 3,4,6; es el siguiente:   ' + squerOf,
  );
  document.getElementById('myFunctionMap').innerHTML =
    'El cuadrado de los números 3,4,6; es el siguiente:  ' + squerOf;
}

//ejercicio 2

function mynewArray() {
  let myFirstArray = [1, 2, 3, 4];
  let mySecondArray = myFirstArray.filter((array) => array % 2 == 0);
  console.log(mySecondArray);
  document.getElementById('mynewArray').innerHTML =
    'Mi array de pares: ' + mySecondArray;
}

//ejercicio 3

function arrayFunction() {
  let myArray = [1, 10, 8, 11];
  let myBiggerNumber = myArray.find((num) => num > 10);
  console.log('El número mayor a 10 es : ' + myBiggerNumber);
  document.getElementById('arrayFunction').innerHTML =
    'El número mayor a 10 es : ' + myBiggerNumber;
}
//ejercicio 4

function myTotalAdd() {
  let myArrayNumbers = [13, 7, 8, 21];
  let adding = myArrayNumbers.reduce(
    (number, totalAdd) => number + totalAdd,
    0,
  );
  console.log('El valor de la suma del array es: ' + adding);
  document.getElementById('myTotalAdd').innerHTML =
    'El valor de la suma del array es: ' + adding;
}
//Nivel 2
//ejercicio 5

const myMiniFunction = (myArray) =>
  myArray
    .filter((num) => num >= 10)
    .map((num) => num * 2)
    .reduce((num, totalNumber) => num + totalNumber, 0);

function myUltraFunction() {
  let myArrayOfNumber = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
  console.log(myMiniFunction(myArrayOfNumber));
  document.getElementById('myUltraFunction').innerHTML =
    'Resultado : ' + myMiniFunction(myArrayOfNumber);
}

//nivel3
//ejercicio 6

function someArrays() {
  let myArrayFunction = [11, 12, 13, 14];
  let someFunction = myArrayFunction.some((num) => num > 10);
  let everyFunction = myArrayFunction.every((num) => num > 10);
  console.log(
    'del array : ' +
      myArrayFunction +
      ' con every es: ' +
      everyFunction +
      ' y con some es : ' +
      someFunction,
  );
  document.getElementById('someArrays').innerHTML =
    'del array : ' +
    myArrayFunction +
    ' con every es: ' +
    everyFunction +
    ' y con some es : ' +
    someFunction;
}

//Ejercicio 1.6: Array loops
//Nivel 1
//Ejercicio 1

function myLoopFunction() {
  let myNames = '';
  let nombres = ['Anna', 'Bernat', 'Clara'];
  nombres.forEach((name) => {
    myNames += ' ' + name;
    console.log('Nombres: ' + name);
  });
  document.getElementById('myLoopFunction').innerHTML = 'Nombres: ' + myNames;
}

//Ejercicio 2

function myLoopArray() {
  let nombres = ['Anna', 'Bernat', 'Clara'];
  for (let names of nombres) console.log('Nombres : ' + names);
}

//Ejercicio 3
function myFilter() {
  let numeros = [1, 2, 3, 4, 5, 6];
  let pares = numeros.filter((num) => num % 2 == 0);
  console.log('Pares: ' + pares);
  document.getElementById('myFilter').innerHTML = pares;
}
//Nivel 2
//Ejercicio 4
function myForInFunction() {
  let obj = {
    nombre: 'Ola',
    edad: 25,
    ciudad: 'Barcelona',
  };
  for (let inf in obj) {
    console.log(inf + ': ' + obj[inf]);
  }
}

//Ejercicio 5
function breakFunction() {
  let numeros = [1, 2, 3, 4, 5, 6];
  for (let num of numeros) {
    if (num == 5) {
      break;
    }
    console.log(num);
  }
}

//Nivel 3
//ejercicio 6

function myIndexFunction() {
  let noms = ['Anna', 'Bernat', 'Clara'];
  let myIndex = 0;
  for (let names of noms) {
    console.log('Posición: ' + myIndex + ' Nombre: ' + names);
    myIndex++;
  }
}
