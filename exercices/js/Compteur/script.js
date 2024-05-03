// Récupération des éléments HTML
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Variable pour stocker la valeur du compteur
let counterValue = 0;

// Met à jour l'affichage du compteur
function updateCounter() {
    counterElement.textContent = counterValue;
}

// Incrémente le compteur et met à jour l'affichage
function incrementCounter() {
    counterValue++;
    updateCounter();
}

// Décrémente le compteur et met à jour l'affichage
function decrementCounter() {
    counterValue--;
    updateCounter();
}

// Réinitialise le compteur à zéro et met à jour l'affichage
function resetCounter() {
    counterValue = 0;
    updateCounter();
}

// Ajout des auditeurs d'événements sur les boutons
incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
resetButton.addEventListener('click', resetCounter);

// Initialisation de l'affichage du compteur
updateCounter();
