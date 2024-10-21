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

let printNumbers = () => {
  let arrayNumber = [1, 2, 3, 4];
  showNumbers(arrayNumber);
};

function showNumbers(numbers) {
  let myNumbers = '';
  for (let i = 0; i < numbers.length; i++) {
    (() => console.log(numbers[i]))();
    myNumbers += numbers[i] + ' ';
  }
  document.getElementById('showNumbers').innerHTML = myNumbers;
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
//nivel 2
//ejercicio3
//primera parte
function ternario() {
  let numero = Number(document.getElementById('userTypeNumber').value);
  let resultado =
    numero > 0
      ? 'El número es positivo'
      : numero < 0
      ? 'El número es negativo'
      : 'El número es cero';
  document.getElementById('ternario').innerHTML = resultado;
}
//segunda parte
function encontrarMaximo() {
  let a = Number(document.getElementById('number1').value);
  let b = Number(document.getElementById('number2').value);
  let c = Number(document.getElementById('number3').value);

  let maximo = a > b && a > c ? a : b > c ? b : c;
  console.log('El número máximo es: ' + maximo);

  document.getElementById('ternario2').innerHTML =
    'El número máximo es: ' + maximo;
}

//nivel3
//ejercicio4

function parOImpar() {
  let numbers = [1, 3, 5, 4, 2, 7];
  let tiposDeNumeros = '';
  for (let i = 0; i < numbers.length; i++) {
    let parOImpar = numbers[i] % 2 === 0 ? `  par, ` : ` impar, `;
    console.log(`El número ${numbers[i]} es ${parOImpar}`);
    tiposDeNumeros += `El número ${numbers[i]} es ${parOImpar}`;
  }
  document.getElementById('showMeTypeNumber').innerHTML = tiposDeNumeros;
}

//Ejercicio 1.3: callback
//nivel 1
//ejercicio 1

function procesar(num, callback) {
  console.log(`Este es mi número: ${num}`);
  callback(num);
}

function myNumber() {
  let myNumber = 5;

  procesar(myNumber, function (numero) {
    document.getElementById('myCallbackNumber').innerHTML =
      'El número es: ' + numero;
  });
}
//ejercicio 2

function calculadora(num1, num2, callback) {
  callback(num1, num2);
}
function calculate() {
  let numero1 = 5;
  let numero2 = 10;
  calculadora(numero1, numero2, function (a, b) {
    let suma = a + b;
    console.log('La suma es: ' + suma);
    document.getElementById('calculateNumbers').innerHTML =
      'La suma es: ' + suma;
  });
}

//ejercicio 3

function esperarISaludar(nombre, callback) {
  setTimeout(() => {
    callback(nombre);
  }, 2000);
}

function sayHello() {
  let nombre = 'Juan';

  esperarISaludar(nombre, function (name) {
    console.log('Hola, ' + name);
    document.getElementById('saludar').innerHTML = 'Hola, ' + name + '!';
  });
}
//ejercicio 4

function procesarElements(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

function myCallback2() {
  let array = [1, 2, 3, 4, 5];

  procesarElements(array, function (element, index) {
    console.log(`Elemento: ${element}, Índice: ${index}`);
    document.getElementById(
      'myCallback2',
    ).innerHTML += `Elemento: ${element}, Índice: ${index} <br>`;
  });
}
//nivel3
//ejercicio 5
function procesarCadena(cadena, callback) {
  let cadenaMayusculas = cadena.toUpperCase();
  callback(cadenaMayusculas);
}
function myChain() {
  let cadena = 'mi cadena de callback';
  procesarCadena(cadena, function (cadenaTransformada) {
    document.getElementById('myChain').innerHTML = cadenaTransformada;
  });
}

//Ejercicio 1.4: Rest & Spread operators:
//ejercicio 1

function ShowArray() {
  let array1 = [1, 2, 3, 4, 5];
  let array2 = [6, 7, 8, 9, 10];
  let allArrays = [...array1, ...array2];
  console.log('tercer array : ' + allArrays);
  document.getElementById('myArray').innerHTML = 'tercer array : ' + allArrays;
}

//ejercicio 2

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
    'estos son los ingredientes que hay: Caja1: ' +
    'café:' +
    objeto1.cafe +
    ' grs, ' +
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
function restOperator() {
  let array = [1, 2, 3, 4, 5, 6];
  const [primerElemento, segundoElemento, ...resto] = array;
  console.log(
    `Primer elemento: ${primerElemento}, Segundo elemento: ${segundoElemento}, Resto de elementos: ${resto.join(
      ', ',
    )}`,
  );
  document.getElementById(
    'restOperator',
  ).innerHTML = `Primer elemento: ${primerElemento}, Segundo elemento: ${segundoElemento}, Resto de elementos: ${resto.join(
    ', ',
  )}`;
}

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

//Ejercicio 1.7:Promisas & Async/Await
//Nivel 1
//Ejercicio 1 y 2

function myPromise() {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hola, mundo');
    }, 2000);
  });
  myPromise.then((message) => {
    console.log(message);
    document.getElementById('myPromise').innerHTML = message;
  });
}

//Ejercicio 3

function myPromiseReact() {
  let userAnswer = document.getElementById('promise').value;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userAnswer == 'hola') {
        resolve(
          (document.getElementById('myPromiseReact').innerHTML =
            'entrada correcta'),
        );
      } else {
        reject(
          (document.getElementById('myPromiseReact').innerHTML =
            'entrada incorrecta'),
        );
      }
    }, 2000);
  })
    .then((message) => {
      document.getElementById('myPromiseReact').innerHTML = message;
      console.log(message);
    })
    .catch((error) => {
      document.getElementById('myPromiseReact').innerHTML = error;
      console.error(error);
    });
}

//Ejercicio 4

async function myPromise2() {
  const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hola,mundo');
    }, 2000);
  });
  const message = await myPromise2;
  console.log(message);

  document.getElementById('myPromise2').innerHTML = message;
}
myPromise2();

//nivel 2
//ejercicio 5
async function myPromise2de2() {
  try {
    const myPromise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        const condition = false;
        if (condition) {
          resolve('hola,mundo');
        } else {
          reject('Hubo un error');
        }
      }, 2000);
    });

    const message = await myPromise2;
    console.log(message);
    document.getElementById('myPromise2de2').innerHTML = message;
  } catch (error) {
    console.error(error);
    document.getElementById('myPromise2de2').innerHTML = 'Error: ' + error;
  }
}
myPromise2();

//nivel 3
//ejercicio 6

function promiseAll() {
  const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promesa 1 resuelta en 2 segundos');
    }, 2000);
  });

  const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promesa 2 resuelta en 3 segundos');
    }, 3000);
  });

  Promise.all([promesa1, promesa2])
    .then((resultados) => {
      console.log(resultados);
      document.getElementById('promiseAll').innerHTML = resultados.join('<br>');
    })
    .catch((error) => {
      console.error('Ocurrió un error:', error);
    });
}
