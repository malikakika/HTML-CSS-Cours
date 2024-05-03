// Sélection des éléments du DOM
var listeFruits = document.getElementById("liste-fruits");
var bouton = document.getElementById("bouton");

// Modification du contenu des éléments avec getElementsByTagName
var elementsLi = listeFruits.getElementsByTagName("li");
for (var i = 0; i < elementsLi.length; i++) {
    elementsLi[i].innerHTML = "Fruit: " + elementsLi[i].innerHTML;
}

// Modification du contenu des éléments avec getElementsByClassName
var fruits = document.getElementsByClassName("fruit");
for (var j = 0; j < fruits.length; j++) {
    fruits[j].style.color = "green";
}

// Gestion de l'événement clic sur le bouton
bouton.addEventListener("click", function() {
    alert("Vous avez cliqué sur le bouton !");
});
