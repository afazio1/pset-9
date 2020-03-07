///////////////////// CONSTANTS /////////////////////////////////////


///////////////////// APP STATE (VARIABLES) /////////////////////////
let boardArray = [];
let square;
let orangePieces = [];
let bluePieces = [];
let turn = "orange";
let move = false;

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
				moveBluePiece(i);
			}
		}
	}

	for (let i = 0; i < orangePieces.length; i++) {
		orangePieces[i].div.onclick = function() {
			if (turn === "orange") {
				moveOrangePiece(i);
			}
		}
	}
}
//move functions need to be fixed

function moveOrangePiece(index) {

	for (let i = 0; i < orangePieces.length; i++) {
        orangePieces[i].div.className = "piece-orange";
    }
    for (let i = 0; i < graySquares.length; i++) {
        graySquares[i].className = "gray";
    }
    orangePieces[index].div.className = "selected piece-orange";

    if (orangePieces[index].king) {

    }
    else {
        console.log(orangePieces[index]);

        let canRight = true;
        let canLeft = true;
        let leftMultiple = 1;
        let rightMultiple = 1;
        for (let i = 0; i < orangePieces.length; i++) {
            

            if (orangePieces[i].index === orangePieces[index].index - 7) {
                canRight = false;


            }
            if (orangePieces[i].index === orangePieces[index].index - 9) {
                canLeft = false;
            }
        }
        for (let i = 0; i < bluePieces.length; i++) {
        	
            if (bluePieces[i].index === orangePieces[index].index - 7) {
            	
                for (let j = 0; j < bluePieces.length; j++) {
                	
                    if (bluePieces[j].index === orangePieces[index].index - 14) {
                        canRight = false;
                        
                    }
                    else {
                    	rightMultiple = 2;
                    }
                }
                for (let k = 0; k < orangePieces.length; k++) {
                    if (orangePieces[k].index === orangePieces[index].index - 14) {
                        canRight = false;
                        rightMultiple = 1;
                    }
                }
            }
            if (bluePieces[i].index === orangePieces[index].index - 9) {
                for (let j = 0; j < bluePieces.length; j++) {
                    if (bluePieces[j].index === orangePieces[index].index - 18) {
                        canLeft = false;
                        
                    }
                    else {
                    	leftMultiple = 2;
                    }
                }
                for (let k = 0; k < orangePieces.length; k++) {
                    if (orangePieces[k].index === orangePieces[index].index - 18) {
                        canLeft = false;
                        leftMultiple = 1;
                    }
                }
            }
        }
        console.log(boardArray[orangePieces[index].index])
        //left off here
        if (boardArray[orangePieces[index].index - (7 * rightMultiple)] !== "" && canRight && orangePieces[index].index - (7 * rightMultiple) >= 0) {
            console.log(boardArray[orangePieces[index].index - (7 * rightMultiple)]);
            boardArray[orangePieces[index].index - (7 * rightMultiple)].className = "highlighted gray";
        }
        if (boardArray[orangePieces[index].index - (9 * leftMultiple)] !== "" && canLeft && orangePieces[index].index - (9 * leftMultiple) >= 0) {
            boardArray[orangePieces[index].index - (9 * leftMultiple)].className = "highlighted gray";
        }
        //left of here
        for (let i = 0; i < boardArray.length; i++) {
            boardArray[i].onclick = undefined;
        }

        if (canRight && orangePieces[index].index - (7 * rightMultiple) >= 0) {
            boardArray[orangePieces[index].index - (7 * rightMultiple)].onclick = function() {

                boardArray[orangePieces[index].index - (7 * rightMultiple)].onclick = undefined;
                
                if (orangePieces[index].index - (9 * leftMultiple) >= 0) {
                    boardArray[orangePieces[index].index - (9 * leftMultiple)].onclick = undefined;
                }

                if (boardArray[orangePieces[index].index - (7 * rightMultiple)] !== "" && orangePieces[index].index - (7 * rightMultiple) >= 0) {
                    boardArray[orangePieces[index].index - (7 * rightMultiple)].className = "gray";
                }
                if (boardArray[orangePieces[index].index - (9 * leftMultiple)] !== "" && orangePieces[index].index - (9 * leftMultiple) >= 0) {
                    boardArray[orangePieces[index].index - (9 * leftMultiple)].className = "gray";
                }
                orangePieces[index].div.className = "piece-orange";

                boardArray[orangePieces[index].index - (7 * rightMultiple)].append(orangePieces[index].div);

                if (rightMultiple === 2) {
                    for (let i = 0; i < bluePieces.length; i++) {
                        if (bluePieces[i].index === orangePieces[index].index - 7) {
                            bluePieces[i].div.remove();
                            bluePieces.splice(i, 1);
                        }
                    }
                }

                orangePieces[index].index -= (7 * rightMultiple);

                turn = "blue";
                //document.getElementById("turn").innerHTML = turn;
            }
        }

        if (canLeft && oranges[index].index - (9 * leftMultiple) >= 0) {
            boardArray[orangePieces[index].index - (9 * leftMultiple)].onclick = function() {
                console.log("left");

                if (orangePieces[index].index - (7 * rightMultiple) >= 0) {
                    boardArray[orangePieces[index].index - (7 * rightMultiple)].onclick = undefined;
                }

                boardArray[orangePieces[index].index - (9 * leftMultiple)].onclick = undefined;

                if (boardArray[orangePieces[index].index - (7 * rightMultiple)] !== "" && orangePieces[index].index - (7 * rightMultiple) >= 0) {
                    boardArray[orangePieces[index].index - (7 * rightMultiple)].className = "gray";
                }
                if (boardArray[orangePieces[index].index - (9 * leftMultiple)] !== "" && orangePieces[index].index - (9 * leftMultiple) >= 0) {
                    boardArray[orangePieces[index].index - (9 * leftMultiple)].className = "gray";
                }
                orangePieces[index].div.className = "piece-orange";

                boardArray[orangePieces[index].index - (9 * leftMultiple)].append(orangePieces[index].div);

                if (leftMultiple === 2) {
                    for (let i = 0; i < bluePieces.length; i++) {
                        if (bluePieces[i].index === orangePieces[index].index - 9) {
                            bluePieces[i].div.remove();
                            bluePieces.splice(i, 1);
                        }
                    }
                }

                orangePieces[index].index -= (9 * leftMultiple);

                turn = "blue";
                //document.getElementById("turn").innerHTML = turn;
            }
        }
    }
}

function moveBluePiece(index2) {

	for (let i = 0; i < bluePieces.length; i++) {
        bluePieces[i].div.className = "piece-blue";
    }
    for (let i = 0; i < graySquares.length; i++) {
        graySquares[i].className = "gray";
    }
    bluePieces[index2].div.className = "selected piece-blue";

    if (bluePieces[index2].king) {

    }
    else {
        console.log(bluePieces[index2]);

        let canRight = true;
        let canLeft = true;
        let leftMultiple = 1;
        let rightMultiple = 1;
        for (let i = 0; i < orangePieces.length; i++) {
            if (orangePieces[i].index === bluePieces[index2].index + 7) {
                for (let j = 0; j < orangePieces.length; j++) {
                    if (orangePieces[j].index === bluePieces[index2].index + 14) {
                        canRight = false;
                    }
                    else {
                        rightMultiple = 2;
                    }
                }
                for (let k = 0; k < bluePieces.length; k++) {
                    if (bluePieces[k].index === bluePieces[index2].index + 14) {
                        canRight = false;
                        rightMultiple = 1;
                    }
                }
            }
            if (orangePieces[i].index === bluePieces[index2].index + 9) {
                for (let j = 0; j < orangePieces.length; j++) {
                    if (orangePieces[j].index === bluePieces[index2].index + 18) {
                        canLeft = false;
                    }
                    else {
                        leftMultiple = 2;
                    }
                }
                for (let k = 0; k < bluePieces.length; k++) {
                    if (bluePieces[k].index === bluePieces[index2].index + 18) {
                        canLeft = false;
                        leftMultiple = 1;
                    }
                }
            }
        }
        for (let i = 0; i < bluePieces.length; i++) {
            if (bluePieces[i].index === bluePieces[index2].index + 7) {
                canRight = false;
            }
            if (bluePieces[i].index === bluePieces[index2].index + 9) {
                canLeft = false;
            }
        }

        if (boardArray[bluePieces[index2].index + (7 * rightMultiple)] !== "" && canRight) {
            boardArray[bluePieces[index2].index + (7 * rightMultiple)].className = "highlighted gray";
        }
        if (boardArray[bluePieces[index2].index + (9 * leftMultiple)] !== "" && canLeft) {
            boardArray[bluePieces[index2].index + (9 * leftMultiple)].className = "highlighted gray";
        }

        for (let i = 0; i < boardArray.length; i++) {
            boardArray[i].onclick = undefined;
        }

        if (canRight) {
            boardArray[bluePieces[index2].index + (7 * rightMultiple)].onclick = function() {
                console.log("right");

                boardArray[bluePieces[index2].index + (7 * rightMultiple)].onclick = undefined;
                boardArray[bluePieces[index2].index + (9 * leftMultiple)].onclick = undefined;

                if (boardArray[bluePieces[index2].index + (7 * rightMultiple)] !== "") {
                    boardArray[bluePieces[index2].index + (7 * rightMultiple)].className = "gray";
                }
                if (boardArray[bluePieces[index2].index + (9 * leftMultiple)] !== "") {
                    boardArray[bluePieces[index2].index + (9 * leftMultiple)].className = "gray";
                }
                bluePieces[index2].div.className = "piece-blue";

                boardArray[bluePieces[index2].index + (7 * rightMultiple)].append(bluePieces[index2].div);

                if (rightMultiple === 2) {
                    for (let i = 0; i < orangePieces.length; i++) {
                        if (orangePieces[i].index === bluePieces[index2].index + 7) {
                            orangePieces[i].div.remove();
                            orangePieces.splice(i, 1);
                        }
                    }
                }

                bluePieces[index2].index += (7 * rightMultiple);

                turn = "orange";
                //document.getElementById("turn").innerHTML = turn;
            }
        }

        if (canLeft) {
            boardArray[bluePieces[index2].index + (9 * leftMultiple)].onclick = function() {
                console.log("left");

                boardArray[bluePieces[index2].index + (7 * rightMultiple)].onclick = undefined;
                boardArray[bluePieces[index2].index + (9 * leftMultiple)].onclick = undefined;

                if (boardArray[bluePieces[index2].index + (7 * rightMultiple)] !== "") {
                    boardArray[bluePieces[index2].index + (7 * rightMultiple)].className = "gray";
                }
                if (boardArray[bluePieces[index2].index + (9 * leftMultiple)] !== "") {
                    boardArray[bluePieces[index2].index + (9 * leftMultiple)].className = "gray";
                }
                bluePieces[index2].div.className = "piece-blue";

                boardArray[bluePieces[index2].index + (9 * leftMultiple)].append(bluePieces[index2].div);

                if (leftMultiple === 2) {
                    for (let i = 0; i < orangePieces.length; i++) {
                        if (orangePieces[i].index === bluePieces[index2].index + 9) {
                            orangePieces[i].div.remove();
                            orangePieces.splice(i, 1);
                        }
                    }
                }

                bluePieces[index2].index += (9 * leftMultiple);

                turn = "orange";
                //document.getElementById("turn").innerHTML = turn;
            }
        }
    }
}

