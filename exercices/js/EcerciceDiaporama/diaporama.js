// Tableau contenant les chemins des ../images du diaporama
const sources = [
    '../images/diapo1.jpg',
    '../images/diapo2.jpg',
    '../images/diapo3.jpg',
    '../images/diapo4.jpg',
    '../images/diapo5.jpg',
    '../images/diapo6.jpg',
    '../images/diapo7.jpg',
    '../images/diapo8.jpg',
    '../images/diapo9.jpg',
    '../images/diapo10.jpg'
];

// Indice de l'image actuellement affichée
let currentIndex = 0;

// Identifiant de l'intervalle pour le changement automatique de photo
let intervalId;

// Fonction pour afficher la prochaine image du diaporama
function afficherProchaineImage() {
    // Passage à l'indice de l'image suivante
    currentIndex = (currentIndex + 1) % sources.length;
    // Mise à jour de l'attribut src de l'élément image avec le chemin de la nouvelle image
    document.getElementById('photo').src = sources[currentIndex];
}

// Code principal exécuté une fois la page chargée
window.addEventListener("load", () => {
    // Récupération de l'élément image du DOM
    const imageDiapo = document.getElementById('photo');

    // Fonction pour démarrer le changement automatique de photo toutes les 2 secondes
    function demarrerChangementAutomatique() {
        intervalId = setInterval(afficherProchaineImage, 5000);
    }

    // Démarrer le changement automatique de photo
    demarrerChangementAutomatique();

    // Ajout d'un auditeur d'événement sur l'élément image pour le clic
    imageDiapo.addEventListener('click', () => {
        // Effacer l'intervalle de changement automatique
        clearInterval(intervalId);
        // Redémarrer le changement automatique après 5 secondes sans interaction
        setTimeout(demarrerChangementAutomatique, 5000);
        // Afficher la prochaine image
        afficherProchaineImage();
    });
});
