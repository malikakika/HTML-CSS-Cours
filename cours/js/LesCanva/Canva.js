// Récupérer le canvas
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Dessiner un gradient
var gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'blue');
gradient.addColorStop(1, 'white');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 200, 100);

// Dessiner du texte
ctx.font = '30px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Hello, Canvas!', 50, 50);
