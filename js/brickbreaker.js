///////////////////// CONSTANTS /////////////////////////////////////






///////////////////// APP STATE (VARIABLES) /////////////////////////
let gameStarted = false;


///////////////////// CACHED ELEMENT REFERENCES /////////////////////
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let body = document.querySelector('body');

let paddle = {
    x: (canvas.width / 2) - 50,
    y: canvas.height - 40,
    width: 100,
    height: 20,
    movement: 1
};


///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;
document.addEventListener('keydown', getArrows);


// Listen for mouse moves
// canvas.addEventListener('mousemove', function(event) {
//   // Check whether point is inside circle
//   if (ctx.isPointInPath(playButton, event.offsetX, event.offsetY)) {

//   	//clear the canvas
//   	ctx.clearRect(0, 0, canvas.width, canvas.height);
//   	//background effect for button
//   	background = new Path2D();
//     background.rect(canvas.width/2 - 100, canvas.height/2 - 50, 205, 105);
//     ctx.fillStyle = 'black';
//     ctx.fill(background);
//     //actual button and play text
//     ctx.fillStyle = 'lime';
//     playButton.rect(canvas.width/2 - 100, canvas.height/2 - 50, 200, 100);
//     ctx.fill(playButton);
//     ctx.font = '40px PressStart2P';
// 	ctx.fillStyle = 'black';
// 	ctx.fillText('Play', canvas.width/2 - 77, canvas.height/2 + 20);

    
//   }
//   else {
//   	ctx.clearRect(0, 0, canvas.width, canvas.height);
//   	//draw button without background shadow
//   	ctx.fillStyle = 'lime';
//     playButton.rect(canvas.width/2 - 100, canvas.height/2 - 50, 200, 100);
//     ctx.fill(playButton);
//     ctx.font = '40px PressStart2P';
// 	ctx.fillStyle = 'black';
// 	ctx.fillText('Play', canvas.width/2 - 77, canvas.height/2 + 20);
//   }
  
  
// });


///////////////////// FUNCTIONS /////////////////////////////////////

function init() {
	playButton = document.createElement('canvas');
	let ctx2 = playButton.getContext('2d');
	playButton.className = 'play-button';
	body.append(playButton);
	ctx2.fillStyle = 'lime';
	ctx2.fillRect(0, 0, playButton.width, playButton.height);
	ctx2.font = '40px PressStart2P';
 	ctx2.fillStyle = 'black';
 	ctx2.fillText('Play', playButton.width/2 - 77, playButton.height/2 + 20);

 	playButton.onclick = game;

	// playButton = new Path2D();
	// playButton.rect(canvas.width/2 - 100, canvas.height/2 - 50, 200, 100);
	// ctx.fillStyle = 'lime';
	// ctx.fill(playButton);
	// ctx.font = '40px PressStart2P';
	// ctx.fillStyle = 'black';
	// ctx.fillText('Play', canvas.width/2 - 77, canvas.height/2 + 20);

}

function game() {
	gameStarted = true;
	playButton.remove('play-button');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.strokeStyle = 'lime';
	ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);


	setTimeout(game, 20);

}

function getArrows() {
	if (gameStarted) {
		if (event.keyCode == 37) {
			//movePaddle();
			console.log("rats r cool");
		}
		else if (event.keyCode == 39) {
			//movePaddle();
			console.log("rats r cool");
		}
	}
	
}


