///////////////////// CONSTANTS /////////////////////////////////////


///////////////////// APP STATE (VARIABLES) /////////////////////////
let boardArray = [];
let square;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
let graySquares = document.getElementsByClassName('gray');
let table = document.getElementById("table");

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;
table.onclick = selectedPiece;



///////////////////// FUNCTIONS /////////////////////////////////////

function init() {
	createBoard();
	createBluePiece();
}

function createBoard() {
	
	for (let i = 0; i < graySquares.length - 1; i+=2) {
		
			boardArray.push(graySquares[i]);
			boardArray.push(null);
			boardArray.push(graySquares[i + 1]);
			boardArray.push(null);
		
	}
	boardArray.pop();
	console.log(boardArray);
}
function createBluePiece() {
	let happened = false;
	for (let b = 0; b < boardArray.length - 40; b+=2) {
		if (b % 8 === 0 && b !== 0 && !happened) { //if there is a row, then increase b
			b++;
			happened = true;
		}
		else if (b === 17 && happened === true) { //if there is another row, the decrease b
			b--;
			happened = false;
		}
		let newBluePiece = {
			index: b,
			king: false
		};
		console.log(newBluePiece);
	}
}

function selectedPiece(e) {
	square = e.target;
	console.log(square);
	if (square.className === "piece-orange") {
		square.className = "selected piece-orange";
		table.onclick = moveOrangePiece;
		console.log(square);
	}
	else if (square.className === "piece-blue") {
		square.className = "selected piece-blue";
		//.onclick = moveBluePiece;
	}


}
function moveOrangePiece(e) {
	//console.log(e.target.className);
	console.log(e.target);
	if (e.target.className === "" && e.target.className !== "piece-blue" && e.target.className !== "piece-orange") {
		//console.log("chicken");
		e.target.className = "piece-orange";
	}
	//console.log("rattatata");
}
function moveBluePiece(e) {

}