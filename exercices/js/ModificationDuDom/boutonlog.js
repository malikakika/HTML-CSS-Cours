// Fonction pour générer une couleur aléatoire au format hexadécimal
function couleurAleatoire() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Fonction pour ajouter un nouvel élément à la liste
function ajouterElementListe() {
    // Création d'un nouvel élément li
    var nouvelElement = document.createElement('li');

    // Génération de l'heure courante au format "hh:mm:ss"
    var date = new Date();
    var heure = date.getHours();
    var minutes = date.getMinutes();
    var secondes = date.getSeconds();
    var heureCourante = heure + 'h' + minutes + "'" + secondes;

    // Génération du contenu de l'élément li
    var contenu = "clic bouton n°" + (nombreDeClics + 1) + " à " + heureCourante;

    // Ajout du contenu à l'élément li
    nouvelElement.textContent = contenu;

    // Ajout de l'élément li à la liste
    liste.appendChild(nouvelElement);
}

// Fonction pour vider la liste des clics et réinitialiser le nombre de clics
function videListe() {
    // Vide complètement la liste en supprimant tous ses enfants
    while (liste.firstChild) {
        liste.removeChild(liste.firstChild);
    }

    // Réinitialise le nombre de clics à 0
    nombreDeClics = 0;
}

// Fonction pour afficher les coordonnées du clic dans la console
function afficherCoordonnees(e) {
    // Récupération des coordonnées du clic
    var x = e.clientX;
    var y = e.clientY;

    // Affichage des coordonnées dans la console
    console.log("Clic sur le bouton aux coordonnées (" + x + "," + y + ")");
}

// Nombre de clics initialisé à 0
var nombreDeClics = 0;

// Référence vers le bouton "Cliquer ici"
var boutonCliquer = document.getElementById('cliquer');

// Référence vers le bouton "Effacer"
var boutonEffacer = document.getElementById('effacer');

// Référence vers la liste ul
var liste = document.getElementById('liste');

// Ajout d'un auditeur d'événement pour changer la couleur de fond aléatoirement
boutonCliquer.addEventListener('click', function changeCouleur(e) {
    // Incrémentation du nombre de clics
    nombreDeClics++;

    // Changement de la couleur de fond du bouton
    boutonCliquer.style.backgroundColor = couleurAleatoire();
});

// Ajout d'un auditeur d'événement pour ajouter un élément à la liste
boutonCliquer.addEventListener('click', ajouterElementListe);

// Ajout d'un auditeur d'événement pour vider la liste
boutonEffacer.addEventListener('click', videListe);

// Ajout d'un auditeur d'événement pour afficher les coordonnées du clic
boutonCliquer.addEventListener('click', afficherCoordonnees);

// Ajout d'un auditeur d'événement pour ajouter un élément à la liste avec la couleur du bouton au moment du clic
boutonCliquer.addEventListener('click', function(e) {
    // Récupération de la couleur du bouton au moment du clic
    var couleurFond = boutonCliquer.style.backgroundColor;
    
    // Ajout d'un nouvel élément à la liste avec la couleur récupérée
    ajouterElementListeAvecCouleur(couleurFond);
});

// Fonction pour ajouter un nouvel élément à la liste avec une couleur spécifiée
function ajouterElementListeAvecCouleur(couleur) {
    // Création d'un nouvel élément li
    var nouvelElement = document.createElement('li');
    
    // Génération de l'heure courante au format "hh:mm:ss"
    var date = new Date();
    var heure = date.getHours();
    var minutes = date.getMinutes();
    var secondes = date.getSeconds();
    var heureCourante = heure + 'h' + minutes + "'" + secondes;

    // Génération du contenu de l'élément li avec la couleur spécifiée
    var contenu = "clic bouton n°" + nombreDeClics + " à " + heureCourante;
    nouvelElement.textContent = contenu;

    // Appliquer la couleur spécifiée à l'élément li
    nouvelElement.style.color = couleur;

    // Ajout de l'élément li à la liste
    liste.appendChild(nouvelElement);
}
