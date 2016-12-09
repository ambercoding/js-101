// user should be able to click a box and marks hows up
// put onclick in the first squuare
// when the user clicks call function that puts x in the box
// MILESTONE
// 4. keep track of whos turn it is
// 5.when a square is clicked put the symbol in and change whose turn it is
// 6. keep player from overwriting square
var whosTurn = 1;
var player1Squares = [];
var player2Squares = [];
// Set up winners aray
var winningCombos = [
	['A1', 'B1', 'C1'],
	['A2', 'B2', 'C2'],
	['A3', 'B3', 'C3'],
	['A1', 'A2', 'A3'],

]
function markSquare(currentSquare){
if((currentSquare.innerHTML === "X") || (currentSquare.innerHTML === "O")){
	console.log("Someone is there. Stop cheating");
}else if(someoneWon){
}else{
	if(whosTurn === 1){
		currentSquare.innerHTML = "X";
		whosTurn = 2;
		player1Squares.push(currentSquare.id)
		checkWin(1)
	}else{
	// console.log(currentSquare.id);
	currentSquare.innerHTML = "O";
	whosTurn = 1;
	player2Squares.push(currentSquare.id)
	checkWin(2)
}
checkWin();
	}
}
function computerMove(){
	var squareDivs = document.getElementByClassName('square');
	var randomNumber = Math.floor(Math.random()* 8);
	var randomSquare = squareDivs[];
	markSquare(randomSquare);
}
function checkWin(whoJustWent, currentPlayerSquares){
	if(whoJustWent === 1){
		playerArray = player1Squares;
	} else{
		playerArray = player2Squares
	}	
	}


	for(var i = 0; i < winningCombos.length; i++){
		var rowCount = 0;
		for(var j = 0; j< winningCombos[i].length; j++){
			var winningSquare = winningCombos[i][j];
			if(player1Squares.indexOf(winningSquare) > -1){
				rowCount++;
		console.log(winningCombos[i][j])
	}
	}
	if(rowCount === 3){
	console.log("Player" + whoJustWent + "won!")
}
}
function gameOver(whoJustWon, winningCombo){
	var message = "congrats to player" + whoJustWon + "You just wont with" + winningCombo
document.getElementById('message').innerHTML = message;
for(var i=0;i<winningCombo.length; ++i){
	document.getElementById(winningCombos[i]).className += ' winning-square';
}
}






























