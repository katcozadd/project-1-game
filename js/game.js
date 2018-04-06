let canvas = document.getElementById('gameCanvas');
let context = canvas.getContext('2d');
let imgDrops;
let xPosition = 0;
let yPosition = 0;
let numberOfVegs = 50;
let numberOfMeats = 25;
var fallingItems = [];




function move(event) {
	if (event.keyCode === 39) {
		xPosition += 20;
	}
	if (event.keyCode === 37) {
		xPosition -= 20;
	}

	canvas.width = canvas.width;
	context.rect(xPosition, yPosition, 20, 50);
	context.stroke();

}

document.onkeydown = move;


// console.log(canvas);