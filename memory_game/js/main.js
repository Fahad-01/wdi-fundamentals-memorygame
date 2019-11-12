console.log("Up and running!");


var cards = [
	{
	rank:"queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank:"queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank:"king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank:"king",
	suit: "daimonds",
	cardImage: "images/king-of-diamonds.png"
	}
	];
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

	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if (cardsInPlay.length == 2 ){
	checkForMatch();
	}

};

flipCard(0);
flipCard(2);

console.log();

//console.log(cardsInPlay);



	// if (cardsInPlay.length === 2){
