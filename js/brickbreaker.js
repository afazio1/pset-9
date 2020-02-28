///////////////////// CONSTANTS /////////////////////////////////////
const brickWidth = 90;
const brickHeight = 50;




///////////////////// APP STATE (VARIABLES) /////////////////////////
let gameStarted;
let go = 0;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

let font;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let body = document.querySelector('body');
let paddle;
let ball;
let bricks = [];

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = startup;
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

//loads the font
async function startup() {
	font = new FontFace(
		"PressStart2P",
		"url(css/PressStart2P.ttf)"
	);

	await font.load();
	document.fonts.add(font);

	init();
}

function init() {
	go++;
	gameStarted = false;
	paddle = {
	    x: (canvas.width / 2) - 50,
	    y: canvas.height - 40,
	    width: 100,
	    height: 20,
	    movement: 1
	};
	ball = {
		x: (canvas.width / 2),
	    y: canvas.height - 70,
	    radius: 10,
	    up: false,
	 	right: false,
	    movementX: 0,
	    movementY: 5
	};
	bricks = [];

	// create bricks
	for (let i = 0; i < canvas.width; i+= brickWidth) {

		for (let j = 0; j < brickHeight * 3; j += brickHeight) {
			brick = {
				x: i,
				y: j,
				hit: false
			};
			bricks.push(brick);
		}
	
	}
	if (go <= 1) {
		playButton = document.createElement('canvas');
		let ctx2 = playButton.getContext('2d');
		playButton.className = 'play-button';
		body.append(playButton);
		ctx2.fillStyle = 'lime';
		ctx2.fillRect(0, 0, playButton.width, playButton.height);
		ctx2.font = '40px PressStart2P';
	 	ctx2.fillStyle = 'black';
	 	ctx2.fillText('Play', playButton.width/2 - 77, playButton.height/2 + 20);
	}
	

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
	//create the bricks
	for (k = 0; k < bricks.length; k++) {
		ctx.strokeStyle = 'lime';
		ctx.strokeRect(bricks[k].x, bricks[k].y, brickWidth, brickHeight);
		
	}
	
	//create a paddle
	
	ctx.fillStyle = '#12990e';
	ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

	//create a ball
	ctx.beginPath();
	ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
	ctx.fillStyle = 'gray';
	ctx.fill();
	
	checkHit(bricks, k);
	changeDirection();
	
	setTimeout(game, 20);

}

function getArrows() {
	if (gameStarted) {
		if (event.keyCode === 37) { // left arrow key
			if (paddle.x >= 40) {
				paddle.x -= 40;
				paddle.movement--;
				ctx.strokeStyle = 'lime';
				ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
			}
		}
		else if (event.keyCode === 39) { // right arrow key
			if (paddle.x + paddle.width <= canvas.width) {
				paddle.x += 40;
				paddle.movement++;
				ctx.strokeStyle = 'lime';
				ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
			}
		}
	}	
}

function changeDirection() {
	
	if (ball.up) {
		ball.y -= ball.movementY + 5;
		
		paddleHit = false;
	}
	if (ball.right) {
		ball.x += ball.movementX + 5;

	}
	if (ball.right === false) {
		ball.x -= ball.movementX + 5;
	}
	if (ball.up === false) {
	
		ball.y += ball.movementY + 5;

	}
}

function checkHit(bricks, index) {
	console.log(bricks);
	console.log(index);
	//check if hits paddle
	if ((ball.y >= paddle.y - ball.radius) && (ball.x >= paddle.x - ball.radius) && (ball.x <= paddle.x + paddle.width + ball.radius)) {
		ball.up = true;
		paddleHit = true;
		
		console.log("rats1");
	}
	else if (ball.x - ball.radius <= 0) { //check collision if collides with left wall
		
		ball.right = true;
	}
	else if (ball.x + ball.radius >= canvas.width) { //check collision if collides with right wall
		ball.right = false;

	}
	else if (ball.y - ball.radius <= 0) { //check collision if collides with top wall
		ball.up = false;

	}
	else if (ball.y - ball.radius >= canvas.height) {
		init();
	}
	//if ball hits a brick
	
}


