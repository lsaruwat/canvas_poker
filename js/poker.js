class Poker extends CardGame{
  
	constructor(){
		super();
		this.gameName = "Poker";
		this.hand = [];
		this.handSize = 5;
		this.user.score = 100;
		this.dealButton = document.getElementById("deal-button");
		this.addEventListener("click", this.newHand, this.dealButton);
	}

	deal(){
		this.hand = [];

		for(let i=0; i<this.handSize; i++){
			this.hand.push(this.deck.pop());
		}
	}

	drawCard(card){
		this.ctx.beginPath();
		this.ctx.rect(card.x, card.y, card.width, card.height);
		this.ctx.fillStyle = card.color;
		this.ctx.fill();
		this.ctx.strokeStyle = "black";
		this.ctx.font = "30px Helvetica";
		this.ctx.fillText(card.name + " " + card.suit ,card.x + (card.width/8),card.y);
		this.ctx.closePath();
	}

	renderHand(){
		for(let i=0; i<this.handSize; i++){
			this.hand[i].x = (this.gameWidth/10+10) * (i+1);
			this.hand[i].y = 40;
			this.drawCard(this.hand[i]);
		}
	}

	sortByVal(card1, card2){
		this.hand.sort(function compare(card1,card2) {
			if (card1.val < card2.val)
				return -1;
				if (card1.val > card2.val)
				return 1;
				return 0;
			});
	}

	jacksOrBetter(){
		this.sortByVal();
		for(let i=this.handSize-1; i>0; i--){
			if(i > 0 && this.hand[i].val > 9){
				if(this.hand[i].val === this.hand[i-1].val) return true;
			}
		}
		return false;
	}

	twoPair(){
		let firstPair = -1;
		this.sortByVal();
		for(let i=this.handSize-1; i>0; i--){
			if(i > 0){
				if(this.hand[i].val === this.hand[i-1].val) firstPair = this.hand[i].val;
			}
		}

		if(firstPair !== -1){

			for(let i=this.handSize-1; i>0; i--){
				if(i > 0){
					if(this.hand[i].val === this.hand[i-1].val && this.hand[i].val !== firstPair) return true;
				}
			}
		}
		return false;
	}

	threeOfAKind(){
		this.sortByVal();
		for(let i=this.handSize-1; i>0; i--){
			if(i > 1){
				if(this.hand[i].val === this.hand[i-1].val && this.hand[i].val === this.hand[i-2].val) return true;
			}
		}
		return false;
	}

	straight(){
		this.sortByVal();
		for(let i=0; i<this.handSize; i++){
			if( i < this.handSize-1 && this.hand[i].val !== this.hand[i+1].val+1) return false;
		}
		return true;
	}

	royalStraight(){
		this.sortByVal();
		if(this.hand[0].val === 0 && 
		   this.hand[1].val === 9 &&
		   this.hand[2].val === 10 && 
		   this.hand[3].val === 11 && 
		   this.hand[4].val === 12)return true;
		return false;
	}

	flush(){
		for(let i=0; i<this.handSize; i++){
			if(i < this.handSize-1 && this.hand[i].suit !== this.hand[i+1].suit ) return false;
		}
		return true;
	}

	fullHouse(){
		if(this.twoPair() && this.threeOfAKind()) return true;
		return false;
	}

	fourOfAKind(){
		this.sortByVal();
		for(let i=this.handSize-1; i>0; i--){
			if(i > 2){
				if(this.hand[i].val === this.hand[i-1].val && this.hand[i].val === this.hand[i-2].val && this.hand[i].val === this.hand[i-3].val) return true;
			}
		}
		return false;
	}

	straightFlush(){
		if(this.straight() && this.flush()) return true;
		return false;
	}

	royalFlush(){
		if(this.royalStraight() && this.flush()) return true;
		return false;
	}

	checkRules(){
		if(this.royalFlush())console.log("royalFlush");
		else if(this.straightFlush())console.log("straightFlush");
		else if(this.fourOfAKind())console.log("fourOfAKind");
		else if(this.fullHouse())console.log("fullHouse");
		else if(this.flush())console.log("flush");
		else if(this.royalStraight())console.log("royalStraight");
		else if(this.straight())console.log("straight");
		else if(this.threeOfAKind())console.log("threeOfAKind");
		else if(this.twoPair())console.log("twoPair");
		else if(this.jacksOrBetter())console.log("jacksOrBetter");
	}

	newHand(){
		if(this.deck.length >= this.handSize){
			this.deal();
			this.clearCanvas();
			this.renderHand();
			this.checkRules();
		}
		else{
			this.createDeck();
			this.shuffleDeck();
		}
	}
}