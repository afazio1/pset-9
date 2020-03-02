///////////////////// CONSTANTS /////////////////////////////////////


///////////////////// APP STATE (VARIABLES) /////////////////////////
let board = [];

///////////////////// CACHED ELEMENT REFERENCES /////////////////////
let lightSquares = document.querySelectorAll('td');

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;

///////////////////// FUNCTIONS /////////////////////////////////////

function init() {
	createArray();
}

function createArray() {
	for (let i = 0; i < lightSquares.length; i++) {
		if (i % 2 !== 0) {
			board.push(lightSquares[i]);
		}
	}
	console.log(lightSquares);
}