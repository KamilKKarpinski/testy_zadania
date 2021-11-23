// Napisz program, w którym utworzysz trzy zmienne o dowolnych nazwach, 
// którym przypiszesz następujące wartości: 10, „b”, 3.7 
// Następnie wypisz ich wartości oraz typy w konsoli

let txt = "b";
var number1 = 10;
const number2 = 3.7;

console.log(txt);
console.log(number1);
console.log(number2);

// Utwórz nową zmienną i przypisz do niej wynik dodawania zmiennej 
//pierwszej i trzeciej, wypisz jej wartość w konsoli.

var number3 = txt + number2;
console.log (number3);


// Masz daną tablicę: const numbers = [2, 5, 7, 10, 34, 16, 879, 1]. Napisz funkcję, która wypisze w konsoli nową tablicę zawierającą 
// tylko parzyste liczby z tablicy numbers.

const numbers = [2, 5, 7, 10, 34, 16, 879, 1]
const evenNumbers = numbers.filter(el => el % 2 === 0);
console.log(evenNumbers);

// Napisz funkcję sayHello przyjmującą jeden argument, który jest obiektem zawierającym dane osoby. Jeśli przekazany obiekt ma 
// własność name, Twoja funkcja powinna wypisać w konsoli “Hello, name!”. Jeśli nie, funkcja ma wypisać tylko “Hello!”. Przykładowy obiekt do wywołania funkcji to const person = { name: "Jill", age: 25, hobby: "sports" }.

const userName = "Jill";

if (userName) {
console.log ("Witaj" + userName + "!");
} else {
    console.log ("Hello!")
}


// Zwiększ nowoutworzoną zmienną o 10, wypisz jej wartość w konsoli.
// Napisz prostą maszynę losującą, czyli funkcję, która przyjmuje jako argument tablicę zawierającą listę osób. Twoja funkcja powinna 
// zwracać losową osobę z tej tablicy. Przykładowa tablica do wywołania funkcji: const students = ["John", "Bill", "Emma", "Stella", "Rob"].

const students = ["John", "Bill", "Emma", "Stella", "Rob"];
const randomStudent = array => {
    const randomIndex = math.floor (Math.random () * (array.length));
    return array[randomIndex];
}
console.log(`Student: ${randomStudent(students)}`);

// Napisz program, który obliczy pole powierzchni koła dla wybranej przez 
// użytkownika długości promienia. Wynik podaj w HTML.

let promien = prompt("podaj promien");
let pole = Math.PI * Math.pow(promien, 2)
alert("pole: " + pole);
