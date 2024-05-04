// JavaScript for HTML5 Canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function drawWelcomeText() {
  ctx.fillStyle = 'lightgray';
  ctx.fillRect(50, 50, 300, 100);

  ctx.fillStyle = 'darkgreen';
  ctx.font = '30px Arial';
  ctx.fillText('Eddystone', 100, 90);
  ctx.fillText('Rock & Ready Mix', 70, 130);
}

drawWelcomeText();
