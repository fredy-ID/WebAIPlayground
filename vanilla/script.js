console.log("Hello, world!");

let a = 10;
let b = 5;
const c = 3;

// Opérations mathématiques simples
let addition = a + b;
let soustraction = a - b;
let multiplication = b * c;
let division = a / c;

console.log("Addition :", addition);
console.log("Soustraction :", soustraction);
console.log("Multiplication :", multiplication);
console.log("Division :", division);

// Condition pour afficher un message selon la valeur de a
if (a > 10) {
    console.log("La variable a est supérieure à 10.");
} else if (a === 10) {
    console.log("La variable a est exactement égale à 10.");
} else {
    console.log("La variable a est inférieure à 10.");
}

// Fonction qui salue un nom donné
function saluer(nom) {
    console.log("Bonjour, " + nom + " !");
}

saluer("Alice");
saluer("Bob");

// Boucle for pour afficher les nombres de 1 à 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// changer le texte d'un paragraphe via JavaScript.
const hom = document.getElementsByClassName("hidden-on-mobile");
hom.querySelector("h3").textContent = "Ce sera caché sur les écrans mobiles";

