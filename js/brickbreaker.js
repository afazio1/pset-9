///////////////////// CONSTANTS /////////////////////////////////////
const brickWidth = 90;
const brickHeight = 50;


///////////////////// APP STATE (VARIABLES) /////////////////////////
let gameStarted;
let go = 0;
let win = null;
let hitFloor;
let score;

///////////////////// CACHED ELEMENT REFERENCES /////////////////////

let font;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let body = document.querySelector('body');
let paddle;
let ball;
let bricks = [];
let endGame;
let scoreBoard = document.getElementById('score');
///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = startup;
document.addEventListener('keydown', getArrows);

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
	score = 0;
	scoreBoard.innerHTML = "Score: " + score;
	gameStarted = false;
	console.log(win);
	if (win !== null) {
		playAgain.remove('play-again');
		endGame.remove();
		console.log("should remove");
	}
	win = null;
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
		playButton = document.createElement('h1');
		playButton.className = 'play-button';
		playButton.innerHTML = "Play";
		document.body.append(playButton);

	}
	
	if (go >= 1) {
		console.log("restatrg");
		gameStarted = true;
		game();

	}
	else {
		playButton.onclick = game;
	}
 	

}

function game() {
	if (go === 0) {
		gameStarted = true;
	}
	console.log(gameStarted);
	if (gameStarted) {
		playButton.remove('play-button');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		go++;
		//draw the paddle
		ctx.fillStyle = '#12990e';
		ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

		//draw the ball
		ctx.beginPath();
		ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
		ctx.fillStyle = 'gray';
		ctx.fill();
		
		//draw the bricks
		for (k = 0; k < bricks.length; k++) {
			if (bricks[k].hit === false || go === 1) {
				ctx.strokeStyle = 'lime';
				ctx.strokeRect(bricks[k].x, bricks[k].y, brickWidth, brickHeight);
			}
		}
		checkHit();
		gameOver();
		changeDirection();
		setTimeout(game, 20);
	}
	
	

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

function checkHit() {
	
	//if ball hits a brick
	for (let r = bricks.length - 1; r >= 0; r--) {
		
		if (ball.y - ball.radius <= bricks[r].y + brickHeight && bricks[r].hit === false && ball.x >= bricks[r].x && ball.x < bricks[r].x + brickWidth) {
			ball.up = false;
			bricks[r].hit = true;
			score += 10;
			scoreBoard.innerHTML = "Score: " + score;
		}
	}
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
	else if (ball.y - ball.radius >= canvas.height) { //check collision with the floor & restart the game
		win = false;
	}
}

function gameOver() {
	//display if you won or not
	if (win !== false) {
		for (let q = 0; q < bricks.length; q++) {
			if (bricks[q].hit === true) {
				win = true;
			}
			else {
				win = null;
				break;
			}
		}
	}
	
	if (win) {
		endGame = document.createElement('h1');
		endGame.className = "gameOver";
		endGame.innerHTML = "You Win!";
		document.body.append(endGame);

		//play again button
		playAgain = document.createElement('h1');
		playAgain.className = 'play-again';
		playAgain.innerHTML = 'Play Again';
		document.body.append(playAgain);
		gameStarted = false;
	 	playAgain.onclick = init;
	}
	else if (win === false) {
		//create a header saying you lost
		endGame = document.createElement('h1');
		endGame.className = "gameOver";
		endGame.innerHTML = "You Lose";
		document.body.append(endGame);

		//play again button
		playAgain = document.createElement('h1');
		playAgain.className = 'play-again';
		playAgain.innerHTML = 'Play Again';
		document.body.append(playAgain);
		gameStarted = false;
	 	playAgain.onclick = init;
	 	
	}
	else if (win === null) {
		return;
	}
}

