///////////////////// CONSTANTS /////////////////////////////////////


///////////////////// APP STATE (VARIABLES) /////////////////////////
let boardArray = [];
let square;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
let graySquares = document.getElementsByClassName('gray');
let table = document.getElementById("table");

///////////////////// EVENT LISTENERS ///////////////////////////////

window.onload = init;
//table.onclick = selectedPiece;



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