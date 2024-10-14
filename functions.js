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
