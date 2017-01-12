class CardGame extends Game{
  
	constructor(){
		super();
		this.gameName = "CardGame";
		this.deck = [];
		this.deckSize = 52;
	}

	createDeck(){
		let suit = null;
		let val = null;
		for(let i=0; i<this.deckSize; i++){
			if(i%4 === 0){
				suit = "spades";
			}
			else if(i%4 === 1){
				suit = "clubs";		
			}
			else if(i%4 === 2){
				suit = "hearts";
			}
			else{
				suit = "diamonds";
			}

			val = Math.floor(i/4);

			this.deck.push(new Card(val, suit, this.gameWidth/10, this.gameHeight/3, "red") );
		}

	}

	shuffleDeck()
	{
		let randomDeck = [];
		let empty = false;

		while(this.deck.length > 0){
			let randomIndex = Math.floor(Math.random()*this.deck.length);
			randomDeck.push(this.deck[randomIndex]);
			this.deck.splice(randomIndex, 1);
		}

		for(let i=0; i<randomDeck.length; i++){
			this.deck[i] = randomDeck[i];
		}
	}
}

