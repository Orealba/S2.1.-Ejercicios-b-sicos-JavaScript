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