console.log("Up and running!");


var cards = ['queen','queen','king','king'];
var cardsInPlay = [];


function checkForMatch(){

	if (cardsInPlay[0] === cardsInPlay[1]){
		alert('You found a match!');
		console.log('You found a match!');
	} else {
		alert("Sorry!!! \nTry Again.");
		console.log("Sorry!!! \nTry Again.");

	}
};


function flipCard(cardId){

	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length == 2 ){
	checkForMatch();
	}

};

flipCard(0);
flipCard(2);

//console.log(cardsInPlay);



	// if (cardsInPlay.length === 2){
