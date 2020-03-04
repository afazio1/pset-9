///////////////////// CONSTANTS /////////////////////////////////////


///////////////////// APP STATE (VARIABLES) /////////////////////////
let boardArray = [];
let square;
let orangePieces = [];
let bluePieces = [];
let turn = "blue";
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
	
	for (let i = 0; i < bluePieces.length; i++) {
		bluePieces[i].div.onclick = function() {
			if (turn === "blue") {
				console.log("reetreert");
				bluePieces[i].div.className = "selected piece-blue";
				index = bluePieces[i].index;
				boardArray[index + 7].className = "gray highlighted";
				boardArray[index + 9].className = "gray highlighted";
				moveBluePiece(index);
			}
			
		}
	}

	for (let i = 0; i < orangePieces.length; i++) {
		orangePieces[i].div.onclick = function() {
			if (turn === "orange") {
				
				orangePieces[i].div.className = "selected piece-orange";
				index = orangePieces[i].index;
				boardArray[index - 7].className = "gray highlighted";
				boardArray[index - 9].className = "gray highlighted";
				moveOrangePiece(index);
			}
			
		}
	}
}
//move functions need to be fixed
function moveBluePiece(index) {
	for (let i = 0; i < boardArray.length; i++) {
		boardArray[i].onclick = function(){
		if (i === index + 7) {
			console.log("sleeeeeem");
			boardArray[index + 7].className = "gray";
			boardArray[index + 9].className = "gray";
			console.log(index);
			for (let i = 0; i < bluePieces.length; i++) {
				if (bluePieces[i].index === index) {
					chipToRemove = bluePieces[i];
					break;
				}
			}
			chipToRemove.div.className = "piece-blue";
			chipToRemove.index = i;
			chipToRemove.div.id = i;
			boardArray[i].append(chipToRemove.div);
		}
		else if (i === index + 9) {
			//move chip
			boardArray[index + 7].className = "gray";
			boardArray[index + 9].className = "gray";
			for (let i = 0; i < bluePieces.length; i++) {
				if (bluePieces[i].index === index) {
					chipToRemove = bluePieces[i];
					break;
				}
			}
			chipToRemove.div.className = "piece-blue";
			chipToRemove.index = i;
			chipToRemove.div.id = i;
			boardArray[i].append(chipToRemove.div);
		}
	}
	
	}
	turn = "orange";
}

function moveOrangePiece(index) {
	for (let i = 0; i < boardArray.length; i++) {
		boardArray[i].onclick = function(){
		if (i === index - 7) {
			console.log("sleeeeeem");
			boardArray[index - 7].className = "gray";
			boardArray[index - 9].className = "gray";
			console.log(index);
			for (let i = 0; i < orangePieces.length; i++) {
				if (orangePieces[i].index === index) {
					chipToRemove = orangePieces[i];
					break;
				}
			}
			chipToRemove.div.className = "piece-orange";
			chipToRemove.index = i;
			chipToRemove.div.id = i;
			boardArray[i].append(chipToRemove.div);
		}
		else if (i === index - 9) {
			boardArray[index - 7].className = "gray";
			boardArray[index - 9].className = "gray";
			for (let i = 0; i < orangePieces.length; i++) {
				if (orangePieces[i].index === index) {
					chipToRemove = orangePieces[i];
					break;
				}
			}
			chipToRemove.div.className = "piece-orange";
			chipToRemove.index = i;
			chipToRemove.div.id = i;
			boardArray[i].append(chipToRemove.div);
		}
	}
	
	}
	turn = "blue";
}

