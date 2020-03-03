///////////////////// CONSTANTS /////////////////////////////////////


///////////////////// APP STATE (VARIABLES) /////////////////////////
let boardArray = [];
let square;
let orangePieces = [];
let bluePieces = [];
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
let graySquares = document.getElementsByClassName('gray');
let table = document.getElementById("table");

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;




///////////////////// FUNCTIONS /////////////////////////////////////

function init() {
	createBoard();
	createBluePiece();
	createOrangePiece();
	table.onmouseover = selectedPiece;
}

function createBoard() {
	for (let j = 0; j < 64; j++) {
        boardArray.push(null);
    }

    let k = 0;
    let oddRow = true;

    for (let l = 0; l < 64; l++) {
        if (l !== 0 && l % 8 === 0) {
            oddRow = !oddRow;
            k = (!oddRow) ? k - 1 : k + 1;
        }
        if (oddRow) {
            if (l % 2 !== 0) {
                boardArray[l] = "";
            }
            else if (l % 2 === 0) {
                boardArray[l] = graySquares[k];
                k++;
            }
        }
        else {
            if (l % 2 !== 0) {
                boardArray[l] = graySquares[k];
            }
            else if (l % 2 === 0) {
                boardArray[l] = "";
                k++;
            }
        }
    }
}
function createBluePiece() {
	//go through the squares and figure out which places to create a blue piece
	for (let b = 0; b < boardArray.length - 40; b += 2) {
		if (b === 8) {
			b++;
		}
		else if (b === 17) {
			b--;
		}
		let newBluePiece = {
			index: b,
			king: false,
			div: null
		};
		//edits the piece object and appends it to the boardArray
		newBluePiece.div = document.createElement("div");
		newBluePiece.div.setAttribute("class", "piece-blue");
		newBluePiece.div.setAttribute("id", b);
		bluePieces.push(newBluePiece);
		boardArray[b].append(newBluePiece.div);
	}
}
function createOrangePiece() {
	//go through the squares and figure out which places to create a orange piece
	for (let o = 63; o >= 40; o--) {
        if (boardArray[o] !== "") {
            let newOrangePiece = {
                index: o,
                king: false,
                div: null
            };
        //edits the piece object and appends it to the boardArray
		newOrangePiece.div = document.createElement("div");
		newOrangePiece.div.setAttribute("class", "piece-orange");
		newOrangePiece.div.setAttribute("id", o);
		orangePieces.push(newOrangePiece);
		boardArray[o].append(newOrangePiece.div);
	}
}
}

function selectedPiece() {
	//console.log("SLEEM");
	for (let i = 0; i < bluePieces.length; i++) {
		bluePieces[i].div.onclick = function() {
			console.log("reetreert");
			moveBluePiece();
		}
	}

	for (let i = 0; i < orangePieces.length; i++) {
		orangePieces[i].div.onclick = function() {
			console.log("sleeeeeem");
			moveOrangePiece();
		}
	}
	// for (let i = 0; i < boardArray.length; i++) {
	// 	if (boardArray[i].className === "gray highlighted") {
	// 		boardArray[i].className === "gray";
	// 	}
	// }
	// piece = e.target;
	// if (piece.className === "piece-orange") { //if the player selects an orange piece, then change styling and call move func
	// 	piece.className = "selected piece-orange";
	// 	piece_id = Number(piece.id);
	// 	boardArray[piece_id - 7].className = "gray highlighted";
	// 	boardArray[piece_id - 9].className = "gray highlighted";
	// 	table.onclick = moveOrangePiece;
	// }
	// else if (piece.className === "piece-blue") { //if the user selects a blue piece, then change styling and call move func
	// 	piece.className = "selected piece-blue";
	// 	piece_id = Number(piece.id); //piece.id needs to be a number or else they concatenate
	// 	boardArray[piece_id + 7].className = "gray highlighted";
	// 	boardArray[piece_id + 9].className = "gray highlighted";
	// 	table.onclick = moveBluePiece;
	// }
	// else {
	// 	return;
	// }


}
//move functions need to be fixed
function moveBluePiece(e) {
	if (e.target.className === "gray highlighted" && e.target === boardArray[piece_id + 7]) { //if user clicked the first available spot

		e.target.className = "gray";
		boardArray[piece_id + 9].className = "gray";
		piece.remove();

		let newBluePiece = {
                index: piece_id + 7,
                king: false,
                div: null
        };

		newBluePiece.div = document.createElement("div");
		newBluePiece.div.setAttribute("class", "piece-blue");
		newBluePiece.div.setAttribute("id", newBluePiece.index);
		boardArray[newBluePiece.index].append(newBluePiece.div);

	}
	else if (e.target === boardArray[piece_id + 9]) { //if the user clicked the second available spot
		
		e.target.className = "gray";
		boardArray[piece_id + 7].className = "gray";
		piece.remove();

		let newBluePiece = {
                index: piece_id + 9,
                king: false,
                div: null
        };

		newBluePiece.div = document.createElement("div");
		newBluePiece.div.setAttribute("class", "piece-blue");
		newBluePiece.div.setAttribute("id", newBluePiece.index);
		boardArray[newBluePiece.index].append(newBluePiece.div);
	}
	else if (e.target.className === "piece-blue") { //if the user clicks another blue piece, then change selections
		boardArray[piece_id + 7].className = "gray";
		boardArray[piece_id + 9].className = "gray";
		//piece.className = "piece-blue";
		//e.target.className = "piece-blue selected";
	}
}

function moveOrangePiece(e) {
	//after the second click, determine what the user clicked
	if (e.target.className === "gray highlighted" && e.target === boardArray[piece_id - 7]) { //if user clicked the first available spot

		e.target.className = "gray";
		boardArray[piece_id - 9].className = "gray";
		piece.remove();

		let newOrangePiece = {
                index: piece_id - 7,
                king: false,
                div: null
        };

		newOrangePiece.div = document.createElement("div");
		newOrangePiece.div.setAttribute("class", "piece-orange");
		newOrangePiece.div.setAttribute("id", newOrangePiece.index);
		boardArray[newOrangePiece.index].append(newOrangePiece.div);
		
	}
	else if (e.target.className === "gray highlighted" && e.target === boardArray[piece_id - 9]) { //if the user clicked the second available spot
		
		e.target.className = "gray";
		piece.remove();
		boardArray[piece_id - 7].className = "gray";
		let newOrangePiece = {
                index: piece_id - 9,
                king: false,
                div: null
        };

		newOrangePiece.div = document.createElement("div");
		newOrangePiece.div.setAttribute("class", "piece-orange");
		newOrangePiece.div.setAttribute("id", newOrangePiece.index);
		boardArray[newOrangePiece.index].append(newOrangePiece.div);
	}
	// else if (e.target.className === "piece-orange") {
	// 	boardArray[piece.id - 7].className = "gray";
	// 	boardArray[piece.id - 9].className = "gray";
	// 	piece.className = "piece-orange";
	// }
}

