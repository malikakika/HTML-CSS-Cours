
/**
 Question1  
*/

 // Attend que la page soit complètement chargée avant d'exécuter le code
window.addEventListener("load", () => {
    // Récupère l'élément du DOM correspondant à l'article avec l'identifiant "description"
    const description = document.getElementById("description");
    // Récupère l'élément du DOM correspondant à l'image avec l'identifiant "imagefilm"
    const image = document.getElementById("imagefilm");

    // Ajoute un auditeur d'événement qui écoute les clics sur l'élément "description"
    description.addEventListener("click", () => {
        // Lorsqu'un clic est détecté, ajoute ou supprime la classe "arrondi" à l'élément "imagefilm"
        // Toggle permet d'ajouter la classe si elle est absente et de la supprimer si elle est présente
        image.classList.toggle("arrondi");
    });
});






/**
 Question2 */

// Déclaration de la variable articles en dehors de la portée des fonctions
let articles;

// Définition de la fonction auditeur_clic
function auditeur_clic(e) {
    // Permute la classe des éléments articles
    articles.forEach((article) => {
        // Toggle entre la classe "fondencouleur" et les classes d'origine
        article.classList.toggle("fondencouleur");
    });
}

// Code principal exécuté une fois la page chargée
window.addEventListener("load", () => {
    // Récupération des éléments du DOM nécessaires
    articles = document.querySelectorAll("article");
    const description = document.getElementById("description");

    // Ajout d'un auditeur d'événement sur l'élément "description"
    description.addEventListener("click", auditeur_clic);
});

/* Question 3 */

// Les éléments du DOM (variables globales)
let image;

// Code principal exécuté une fois la page chargée
window.addEventListener("load", () => {
    // Récupération de l'élément image du DOM
    image = document.querySelector("#imagefilm");

    // Récupération de l'élément correspondant au titre général de la page
    const titreGeneral = document.querySelector("header h1");

    // Auditeur pour l'événement mouseover sur le titre général
    titreGeneral.addEventListener("mouseover", (e) => {
        // Changer la source de l'image lorsque le curseur survole le titre
        image.src = "../images/brighter2.png";
    });

    // Auditeur pour l'événement mouseout sur le titre général
    titreGeneral.addEventListener("mouseout", (e) => {
        // Revenir à l'image d'origine lorsque le curseur quitte le titre
        image.src = "../images/brighter1.png";
    });
});
