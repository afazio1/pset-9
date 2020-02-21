///////////////////// CONSTANTS /////////////////////////////////////






///////////////////// APP STATE (VARIABLES) /////////////////////////





///////////////////// CACHED ELEMENT REFERENCES /////////////////////
 let canvas = document.getElementById('canvas');
 let ctx = canvas.getContext('2d');



///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;



///////////////////// FUNCTIONS /////////////////////////////////////

function init() {
	ctx.fillStyle = 'lime';
	ctx.strokeStyle = '3px black';
	ctx.fillRect(canvas.width/2 - 100, canvas.height/2 - 50, 200, 100);
	ctx.strokeRect(canvas.width/2 - 100, canvas.height/2 - 50, 200, 100);
	ctx.font = '48px sans serif';
	ctx.fillStyle = 'black';
	ctx.fillText('Play', canvas.width/2 - 45, canvas.height/2 + 10);

}



