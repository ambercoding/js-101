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
var someoneWon = false;
var computerPlayer = false;
// Set up winners aray
var winningCombos = [
	['A1', 'B1', 'C1'],
	['A2', 'B2', 'C2'],
	['A3', 'B3', 'C3'],
	['A1', 'A2', 'A3'],
	['B1', 'B2', 'B3'],
	['C1', 'C2', 'C3'],
	['A1', 'B2', 'C3'],
	['A3', 'B2', 'C1'],

];

console.log(winningCombos);

function onePlayerGame(){
	computerPlayer = true;
}
$('square').click(function(){
	markSquare(this)
});

function markSquare(currentSquare){
if((currentSquare.innerHTML === "X") || (currentSquare.innerHTML === "O")){
	console.log("Someone is there. Stop cheating");
}else if(someoneWon){
	console.log('Someone already won!');
}else{
	if(whosTurn === 1){
		currentSquare.innerHTML = "X";
		whosTurn = 2;
		player1Squares.push(currentSquare.id)
		checkWin(1, player1Squares);
		if(computerPlayer){
			computerMove();
		}
	}else{
	// console.log(currentSquare.id);
	currentSquare.innerHTML = "O";
	whosTurn = 1;
	player2Squares.push(currentSquare.id);
	checkWin(2, player2Squares);
		}
	}
}

function computerMove(){
	var needASquare = true;
	var squareDivs = document.getElementByClassName('square');
	while(needASquare){
	var randomNumber = (Math.ceil(Math.random()* 8)) + 1;
	var randomSquare = squareDivs[randomNumber];
	isTaken = markSquare(randomSquare);
	console.log(isTaken);
	if(isTaken !== "taken"){
		needASquare = false;

	}
}
}
function checkWin(whoJustWent, currentPlayerSquares){
// Outter Loop
	for(var i = 0; i < winningCombos.length; i++){
		// Inner Loop
		var rowCount = 0;
		for(var j = 0; j < winningCombos[i].length; j++){
			// console.log(winningCombos[i][j]);
			var winningSquare = winningCombos[i][j];
			if(currentPlayerSquares.indexOf(winningSquare) > -1){
				//HIT!. Player has this square, somewhere.
				rowCount++;
			}
		}
		if(rowCount === 3){
			// Player had all 3 of these j's. Win. 
			console.log("Player " + whoJustWent + " , won!");
			gameOver(whoJustWent, winningCombos[i]);
			break;
		}
		// console.log("Combo completed");
	}
}

function gameOver(whoJustWon, winningCombo){
	winningComboReset = winningCombo;
	var message = "Congrats to player " + whoJustWon + "! You just won with " + winningCombo
document.getElementById('message').innerHTML = message;
for(var i=0;i<winningCombo.length; i++){
	document.getElementById(winningCombo[i]).className += ' winning-square';
}
	someoneWon = true;
}
// if(gameOver == true){
// 	location.reload();
// }

$('tryagain').click(function(){
	reload(this)
});





























