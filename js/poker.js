class Poker extends CardGame{
  
	constructor(){
		super();
		this.gameName = "Poker";
		this.hand = [];
		this.handSize = 5;
	}

	deal(){
		for(let i=0; i<this.handSize; i++){
			this.hand.push(this.deck.pop());
		}
	}

	drawCard(card){
		this.ctx.beginPath();
		this.ctx.rect(card.x, card.y, card.width, card.height);
		this.ctx.fillStyle = card.color;
		this.ctx.fill();
		this.ctx.font = "30px Helvetica";
		this.ctx.fillText(card.val + " " + card.suit ,card.x,card.y);
		this.ctx.closePath();
	}

	renderHand(){
		for(let i=0; i<this.handSize; i++){
			this.hand[i].x = (this.gameWidth/10+10) * (i+1);
			this.hand[i].y = 20;
			this.drawCard(this.hand[i]);
		}
	}
}