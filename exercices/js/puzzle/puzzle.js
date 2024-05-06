document.addEventListener("DOMContentLoaded", function () {
    var premiereImage = null;
    var coupsJoues = 0;
    var imagesPuzzle = document.querySelectorAll("#images img:not([alt='Puzzle résolu'])");

    // Mélanger les images aléatoirement
    function melangerImages() {
        var imagesArray = Array.from(imagesPuzzle);
        imagesArray.sort(function () {
            return Math.random() - 0.5;
        });
        imagesArray.forEach(function (image, index) {
            document.querySelectorAll("#images td")[index].appendChild(image);
        });
    }

    // Actualiser le compteur de coups joués
    function actualiserCompteur() {
        document.getElementById("compteur-coups").textContent = coupsJoues;
    }

    // Vérifier si le puzzle est résolu
    function puzzleResolu() {
        var puzzleResolu = true;
        imagesPuzzle.forEach(function (image, index) {
            if (image.src !== "http://localhost:8080/images/puzzle" + (index + 1) + ".jpg") {
                puzzleResolu = false;
            }
        });
        return puzzleResolu;
    }

    function auditeur_clic(evenement) {
        var imageClique = evenement.target;
        if (premiereImage === null) {
            premiereImage = imageClique;
        } else {
            var srcTemporaire = imageClique.src;
            imageClique.src = premiereImage.src;
            premiereImage.src = srcTemporaire;
            coupsJoues++;
            actualiserCompteur();
            premiereImage = null;

            if (puzzleResolu()) {
                document.getElementById("message-victoire").textContent = "Félicitations, vous avez résolu le puzzle !";
            }
        }
    }

    // Associer l'auditeur aux images du puzzle
    imagesPuzzle.forEach(function (image) {
        image.addEventListener("click", auditeur_clic);
    });

    // Mélanger les images au chargement de la page
    melangerImages();

    // Actualiser le compteur de coups joués au chargement de la page
    actualiserCompteur();
});
