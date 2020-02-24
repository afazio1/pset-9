///////////////////// CONSTANTS /////////////////////////////////////






///////////////////// APP STATE (VARIABLES) /////////////////////////



///////////////////// CACHED ELEMENT REFERENCES /////////////////////
let canvas = document.getElementById('canvas');
//let playButton = document.getElementById('playButton');
let ctx = canvas.getContext('2d');
let body = document.querySelector('body');




///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;


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
	let playAgain = document.createElement('canvas');
	let ctx2 = playAgain.getContext('2d');
	playAgain.className = 'play-again';
	body.append(playAgain);
	ctx2.fillStyle = 'lime';
	ctx2.fillRect(0, 0, playAgain.width, playAgain.height);
	ctx2.font = '40px PressStart2P';
 	ctx2.fillStyle = 'black';
 	ctx2.fillText('Play', playAgain.width/2 - 77, playAgain.height/2 + 20);



	// playButton = new Path2D();
	// playButton.rect(canvas.width/2 - 100, canvas.height/2 - 50, 200, 100);
	// ctx.fillStyle = 'lime';
	// ctx.fill(playButton);
	// ctx.font = '40px PressStart2P';
	// ctx.fillStyle = 'black';
	// ctx.fillText('Play', canvas.width/2 - 77, canvas.height/2 + 20);

	

}




