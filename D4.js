/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function calcolaArea(l1, l2) {
  const area = l1 * l2;
  return area;
}

const lato1 = 5;
const lato2 = 8;

const area = calcolaArea(lato1, lato2);
console.log("L'area del rettangolo è:", area);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  const result = num1 === num2 ? (num1 + num2) * 3 : num1 + num2;
  return result;
}
const num1 = 3;
const num2 = 3;
const result = crazySum(num1, num2);
console.log("il risultato di crazySum e:", result);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero) {
  const result = numero > 19 ? (numero - 19) * 3 : Math.abs(numero - 19);
  console.log("Il risultato di crazyDiff è:", result);
  return result;
}

const numero = 21;

const resultDiff = crazyDiff(numero);
console.log("Il risultato di crazyDiff è:", resultDiff);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  const result = (n >= 20 && n <= 100) || n === 400;
  console.log("Il risultato di boundary per {n} è:", result);
  return result;
}

const numero1 = 50;
const risultato1 = boundary(numero1);

const numero2 = 400;
const risultato2 = boundary(numero2);

const numero3 = 15;
const risultato3 = boundary(numero3);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(stringa) {
  const result = stringa.startsWith("EPICODE") ? stringa : "EPICODE" + stringa;
  return result;
}
console.log("Il risultato di epify è:", result);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(numero) {
  const result = numero > 0 && (numero % 3 === 0 || numero % 7 === 0);
  return result;
}
console.log("Risultato check3and7:", result);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
  const result = stringa.split("").reverse().join("");
  return result;
}

const stringaDaInvertire = "Hello, World!";
const risultatoReverse = reverseString(stringaDaInvertire);

console.log("Il risultato di reverseString è:", risultatoReverse);

const stringaDaInvertire_ = "Epicode";
const risultatoReverse_ = reverseString(stringaDaInvertire_);

console.log("Il risultato di reverseString è:", risultatoReverse_);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa) {
  return stringa
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const stringaDaModificare = "ciao sono gioele";
const risultatoUpperFirst = upperFirst(stringaDaModificare);

console.log("Il risultato di upperFirst è:", risultatoUpperFirst);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  const randomNumbers = [];

  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}
const numeroDiRandom = 5;
const risultatoGiveMeRandom = giveMeRandom(numeroDiRandom);
console.log("Il risultato di giveMeRandomè:", risultatoGiveMeRandom);
