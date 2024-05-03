// Sélection des éléments du DOM
var titre = document.getElementById("titre");
var paragraphe = document.getElementById("paragraphe");
var bouton = document.getElementById("bouton");

// Modification du contenu des éléments
titre.innerHTML = "Nouveau titre";
paragraphe.innerHTML = "Bienvenue sur notre site web !";

// Gestion de l'événement clic sur le bouton
bouton.addEventListener("click", function() {
    alert("Vous avez cliqué sur le bouton !");
});
