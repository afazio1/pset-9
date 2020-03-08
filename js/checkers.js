var turn = "orange";
var header = document.getElementById("h2");
header.textContent = "Turn: orange";
var secondturn = false;
var currentid = -1;
var closede = false;
var win = "";
var turns = 0;
var players = "Two";
window.onload = function(){
for (var i=0; i< 64; i++){
    let dive = document.createElement("div");
    dive.style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? 'gray' : 'transparent';
    dive.className = "squire";
	dive.id = i;
	dive.innerHTML = parseInt((i / 8) + i) % 2 == 0 && (i < 24) ? '<div class="bluecircle"></div>' : (parseInt((i / 8) + i) % 2 == 0 && (i > 40) ? '<div class="orangecircle"></div>' : '');
    document.getElementById("mainChessBoard").appendChild(dive);
}
fakeBoard();
setClick();
setReset();
}


		
function setReset(){
	document.getElementById("reset-button").onclick = function(){
		turn = "orange";
		header = document.getElementById("h2");
		header.textContent = "Turn: orange";
		secondturn = false;
		currentid = -1;
		closede = false;
		win = "";
		turns = 0;
		for(var i = 0; i < 64; i++){
			document.getElementById(i).remove();
		}
		for (var i=0; i< 64; i++){
			let dive = document.createElement("div");
			dive.style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? 'gray' : 'transparent';
			dive.className = "squire";
			dive.id = i;
			dive.innerHTML = parseInt((i / 8) + i) % 2 == 0 && (i < 24) ? '<div class="bluecircle"></div>' : (parseInt((i / 8) + i) % 2 == 0 && (i > 40) ? '<div class="orangecircle"></div>' : '');
			document.getElementById("mainChessBoard").appendChild(dive);
		}
		setClick();
	}
}
function setClick(){
for(var i=0; i < 128; i++){
	let currentSquare = document.getElementById(i.toString());
	currentSquare.onclick = function(){
		if((closede == false || currentSquare.id == currentid || currentSquare.style.backgroundColor == "yellow") && !win){
		if(currentSquare.innerHTML.includes('<div class="orangecircle">') && turn == "orange"){
			reset();
			var leftSquare = document.getElementById(currentSquare.id-9);
			var rightSquare = document.getElementById(currentSquare.id-7);
			var moreLeft = document.getElementById(currentSquare.id - 18);
			var moreRight = document.getElementById(currentSquare.id - 14);
			var leftSquar = document.getElementById(currentSquare.id - (-9));
			var rightSquar = document.getElementById(currentSquare.id - (-7));
			var moreLef = document.getElementById(currentSquare.id - (-18));
			var moreRigh = document.getElementById(currentSquare.id - (-14));
			if(!(!leftSquare) && leftSquare.innerHTML == "" && (leftSquare.id - (leftSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 1){
				leftSquare.style.backgroundColor = "yellow";
			}
			else if(!(!leftSquare) && leftSquare.innerHTML.includes('<div class="bluecircle">') && !(!moreLeft) && moreLeft.innerHTML == "" && (moreLeft.id - (moreLeft.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 2){
				moreLeft.style.backgroundColor = "yellow";
			}
			if(!(!rightSquare) && rightSquare.innerHTML == "" && (rightSquare.id - (rightSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 1){
				rightSquare.style.backgroundColor = "yellow";
			}
			else if(!(!rightSquare) && rightSquare.innerHTML.includes('<div class="bluecircle">') && !(!moreRight) && moreRight.innerHTML == "" && (moreRight.id - (moreRight.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 2){
				moreRight.style.backgroundColor = "yellow";
			}
			if(currentSquare.innerHTML.includes('K')){
				if(!(!leftSquar) && leftSquar.innerHTML == "" && (leftSquar.id - (leftSquar.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 1){
					leftSquar.style.backgroundColor = "yellow";
				}
				else if(!(!leftSquar) && leftSquar.innerHTML.includes('<div class="bluecircle">') && !(!moreLef) && moreLef.innerHTML == "" && (moreLef.id - (moreLef.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 2){
					moreLef.style.backgroundColor = "yellow";
				}
				if(!(!rightSquar) && rightSquar.innerHTML == "" && (rightSquar.id - (rightSquar.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 1){
					rightSquar.style.backgroundColor = "yellow";
				}
				else if(!(!rightSquar) && rightSquar.innerHTML.includes('<div class="bluecircle">') && !(!moreRigh) && moreRigh.innerHTML == "" && (moreRigh.id - (moreRigh.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 2){
					moreRigh.style.backgroundColor = "yellow";
				}
			}
			currentSquare.style.backgroundColor = "lime";
		}
		if(currentSquare.innerHTML.includes('<div class="bluecircle">') && turn == "blue"){
			reset();
			var leftSquare = document.getElementById(currentSquare.id - (-9));
			var rightSquare = document.getElementById(currentSquare.id - (-7));
			var moreLeft = document.getElementById(currentSquare.id - (-18));
			var moreRight = document.getElementById(currentSquare.id - (-14));
			var leftSquar = document.getElementById(currentSquare.id-9);
			var rightSquar = document.getElementById(currentSquare.id-7);
			var moreLef = document.getElementById(currentSquare.id - 18);
			var moreRigh = document.getElementById(currentSquare.id - 14);
			if(!(!leftSquare) && leftSquare.innerHTML == "" && (leftSquare.id - (leftSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 1){
				leftSquare.style.backgroundColor = "yellow";
			}
			else if(!(!moreLeft) && leftSquare.innerHTML.includes('<div class="orangecircle">') && moreLeft.innerHTML == "" && (moreLeft.id - (moreLeft.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 2){
				moreLeft.style.backgroundColor = "yellow";
			}
			if(!(!rightSquare) && rightSquare.innerHTML == "" && (rightSquare.id - (rightSquare.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 1){
				rightSquare.style.backgroundColor = "yellow";
			}
			else if(!(!moreRight) && rightSquare.innerHTML.includes('<div class="orangecircle">') && moreRight.innerHTML == "" && (moreRight.id - (moreRight.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 + 2){
				moreRight.style.backgroundColor = "yellow";
			}
			if(currentSquare.innerHTML.includes('K')){
				if(!(!leftSquar) && leftSquar.innerHTML == "" && (leftSquar.id - (leftSquar.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 1){
					leftSquar.style.backgroundColor = "yellow";
				}
				else if(!(!leftSquar) && leftSquar.innerHTML.includes('<div class="orangecircle">') && !(!moreLef) && moreLef.innerHTML == "" && (moreLef.id - (moreLef.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 2){
					moreLef.style.backgroundColor = "yellow";
				}
				if(!(!rightSquar) && rightSquar.innerHTML == "" && (rightSquar.id - (rightSquar.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 1){
					rightSquar.style.backgroundColor = "yellow";
				}
				else if(!(!rightSquar) && rightSquar.innerHTML.includes('<div class="orangecircle">') && !(!moreRigh) && moreRigh.innerHTML == "" && (moreRigh.id - (moreRigh.id % 8))/8 == (currentSquare.id - (currentSquare.id % 8))/8 - 2){
					moreRigh.style.backgroundColor = "yellow";
				}
			}
			currentSquare.style.backgroundColor = "lime";
		}
		if(currentSquare.innerHTML == "" && currentSquare.style.backgroundColor == "yellow"){
			var oldSquare = "";
			for(var i = 0; i < 128; i++){
				if(document.getElementById(i.toString()).style.backgroundColor == "lime"){
					oldSquare = document.getElementById(i.toString());
				}
			}
			if(oldSquare.id == currentSquare.id - 18){
				document.getElementById(currentSquare.id - 9).innerHTML = "";
				secondturn = true;
			}
			if(oldSquare.id == currentSquare.id - 14){
				document.getElementById(currentSquare.id - 7).innerHTML = "";
				secondturn = true;
			}
			if(oldSquare.id == currentSquare.id - (-18)){
				document.getElementById(currentSquare.id - (-9)).innerHTML = "";
				secondturn = true;
			}
			if(oldSquare.id == currentSquare.id - (-14)){
				document.getElementById(currentSquare.id - (-7)).innerHTML = "";
				secondturn = true;
			}
			currentSquare.innerHTML = oldSquare.innerHTML;
			oldSquare.innerHTML = "";
			var blackcount = 0;
			var whitecount = 0;
			for(let i = 0; i < 64; i++){
				if(document.getElementById(i).innerHTML.includes('<div class="bluecircle">')){
					blackcount++;
				}
				else if(document.getElementById(i).innerHTML.includes('<div class="orangecircle">')){
					whitecount++;
				}
			}
			if(blackcount == 0){
				win = "orange";
			}
			else if(whitecount == 0){
				win = "blue";
		    }
			else if(turns == 20){
				win = "No one";
			}
			if(currentSquare.id - currentSquare.id % 8 == 0 || currentSquare.id - currentSquare.id % 8 == 56){
				if(currentSquare.innerHTML.includes('<div class="orangecircle">')){
					currentSquare.innerHTML = '<div class="orangecircle">K</div>';
				}
				else{
					currentSquare.innerHTML = '<div class="bluecircle">K</div>';
				}
			}
			let movementSquare = -1;
			if(secondturn == true){
				currentSquare.click();
				for(let i = 0; i < 128; i++){
					if(document.getElementById(i).style.backgroundColor == "yellow" && Math.abs(currentSquare.id - i) > 10){
						movementSquare = i;
					}
				}
			}
			if(movementSquare >= 0){
				currentid = currentSquare.id;
				closede = true;
			}
			else{
				turn = turn == "orange" ? "blue": "orange";
				secondturn = false;
				closede = false;
			}
			if(blackcount == 1 && whitecount == 1){
				turns++;
			}
			if(!win){    
				header.textContent = "Turn: " + turn;
				reset();
				var possible = false;
				for(let i = 0; i < 64; i++){
					document.getElementById(i).click();
					for(let i = 0; i < 64; i++){
						if(document.getElementById(i).style.backgroundColor == "yellow"){
							possible = true;
						}
					}
					reset();
				}
				document.getElementById(63).style.backgroundColor = "gray";
				if(possible == false){
					if(turn == "blue"){
						win = "orange"
					}
					else{
						win = "blue"
					}
					header.textContent = win + " wins";
				}
				if(players == "One"){
					computerTurn();
					turn = turn == "orange" ? "blue": "orange";
				}
			}
			else{
				header.textContent = win + " wins";
				
			}
			
		}
		}
	}
}
}
function reset(){
	for(var i=0; i<128; i++){
		document.getElementById(i).style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? 'gray' : 'transparent';
	}
}
function fakeBoard(){
	for (var i=64; i< 128; i++){
    let dive = document.createElement("div");
	dive.id = i;
	dive.style.display = "none";
	dive.innnerHTML = '<div class="orangecircle">K</div>';
    document.getElementById("mainChessBoard").appendChild(dive);
	}
}
function fakeBoardSnapshot(){
	var snapshot = [];
	for(var i = 64; i < 128; i++){
		if(document.getElementById(i).innerHTML.includes('<div class="orangecircle">')){
			if(document.getElementById(i).innerHTML.includes('K')){
				snapshot.push(i);
			}
			else{
				snapshot.push(i + 64);
			}
		}
		else if(document.getElementById(i).innerHTML.includes('<div class="bluecircle">')){
			if(document.getElementById(i).innerHTML.includes('K')){
				snapshot.push(i + 128);
			}
			else{
				snapshot.push(i + 192);
			}
		}
	}
	return snapshot;
}

function restoreSnapshot(snapshot){

	for(var i = 64; i < 128; i++){
		document.getElementById(i).innerHTML = "";
	}
	for(var i = 0; i < snapshot.length; i++){
		if(snapshot[i] < 128){
			document.getElementById(snapshot[i]).innerHTML = '<div class="orangecircle">K</div>';
		}
		else if(snapshot[i] < 192){
			document.getElementById(snapshot[i] - 64).innerHTML = '<div class="orangecircle"></div>';
		}
		else if(snapshot[i] < 256){
			document.getElementById(snapshot[i] - 128).innerHTML = '<div class="bluecircle">K</div>';
		}
		else{
			document.getElementById(snapshot[i] - 192).innerHTML = '<div class="bluecircle"></div>';
		}
	}
}
	
// 
