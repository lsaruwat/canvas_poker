

class Poker extends Game{
  
	constructor(){
		super();
		this.gameName = "Poker";
		this.deck = [];
	}

	createDeck(){
		let suit = null;
		let val = null;
		for(let i=0; i<52; i++){
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

			this.deck.push(new Card(val, suit) );
		}

		console.log(this.deck);
	}
}