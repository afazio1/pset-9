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
	createOrangePiece();
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
    console.log(boardArray);
}
function createBluePiece() {
	let happened = false;
	for (let b = 0; b < boardArray.length - 40; b+=2) {
		if (b === 8 && !happened) { //if there is a row, then increase b
			b++;
			happened = true;
		}
		else if (b === 17 && happened === true) { //if there is another row, the decrease b
			b--;
			happened = false;
		}
		let newBluePiece = {
			index: b,
			king: false,
			div: null
		};
		
		newBluePiece.div = document.createElement("div");
		newBluePiece.div.setAttribute("class", "piece-blue");
		newBluePiece.div.setAttribute("id", b);
		boardArray[b].append(newBluePiece.div);
	}
}
function createOrangePiece() {
	for (let o = 63; o >= 40; o--) {
        if (boardArray[o] !== "") {
            let newOrangePiece = {
                index: o,
                king: false,
                div: null
            };
		newOrangePiece.div = document.createElement("div");
		newOrangePiece.div.setAttribute("class", "piece-orange");
		newOrangePiece.div.setAttribute("id", o);
		boardArray[o].append(newOrangePiece.div);
	}
}
}
function selectedPiece(e) {
	piece = e.target;
	if (piece.className === "piece-orange") {
		piece.className = "selected piece-orange";
		piece_id = Number(piece.id);
		boardArray[piece_id - 7].className = "gray highlighted";
		boardArray[piece_id - 9].className = "gray highlighted";
		table.onclick = moveOrangePiece;
	}
	else if (piece.className === "piece-blue") {
		piece.className = "selected piece-blue";
		piece_id = Number(piece.id); //piece.id needs to be a number or else they concatenate
		boardArray[piece_id + 7].className = "gray highlighted";
		boardArray[piece_id + 9].className = "gray highlighted";
		table.onclick = moveBluePiece;
	}


}
function moveOrangePiece(e) {
	//console.log(e.target.className);
	console.log(e.target);

	if (e.target.className === "gray highlighted" && e.target === boardArray[piece_id - 7]) {
		//console.log("chicken");
		//the person can go here
		piece.className = "gray";
		e.target.className = "gray";
		boardArray[piece_id - 9].className = "gray";

		let newOrangePiece = {
                index: piece_id - 7,
                king: false,
                div: null
        };

		newOrangePiece.div = document.createElement("div");
		newOrangePiece.div.setAttribute("class", "piece-orange");
		newOrangePiece.div.setAttribute("id", newOrangePiece.index);
		boardArray[newOrangePiece.index].append(newOrangePiece.div);
		//boardArray[piece_id - 7].className = "gray";
		//console.log(e.target);
		
	}
	else if (e.target.className === "gray highlighted" && e.target === boardArray[piece_id - 9]) {
		console.log("ok");
		piece.className = "gray";
		e.target.className = "gray";
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
	else if (e.target.className === "piece-orange") {
		boardArray[piece.id - 7].className = "gray";
		boardArray[piece.id - 9].className = "gray";
		piece.className = "piece-orange";
	}
}
function moveBluePiece(e) {
	if (e.target.className === "gray highlighted" && (e.target === boardArray[piece_id + 7] || e.target === boardArray[piece_id + 9])) {
		piece.className = "gray";
		e.target.className = "gray piece-blue";

	}
	// else if (e.target.className === "piece-blue") {
	// 	boardArray[piece.id + 7].className = "gray";
	// 	boardArray[piece.id + 9].className = "gray";
	// 	piece.className = "piece-blue";
	// }
}
