class Poker extends CardGame{
  
	constructor(){
		super();
		this.gameName = "Poker";
		this.hand = [];
		this.tempHand = [];
		this.handSize = 5;
		this.user = new Player();
		this.user.score = 100;
		this.gameOverText = "Not a Winning Hand";
		this.dealButton = document.getElementById("deal-button");
		this.drawButton = document.getElementById("draw-button");
		this.addEventListener("click", this.newHand, this.dealButton);
		this.addEventListener("click", this.draw, this.drawButton);
		this.addEventListener("click", this.cardSelected);
		//this.newHand();
	}

	deal(){
		this.createDeck();
		this.shuffleDeck();
		this.hand = [];

		for(let i=0; i<this.handSize; i++){
			this.hand.push(this.deck.pop());
		}
		this.tempHand = this.hand.slice();
	}

	renderCard(card){
		this.ctx.beginPath();
		this.ctx.rect(card.x, card.y, card.width, card.height);
		this.ctx.fillStyle = card.color;
		this.ctx.fill();
		this.ctx.fillStyle = "black";
		this.ctx.font = "30px Helvetica";
		this.ctx.fillText(card.name ,card.x + card.width/10,card.y + card.height/10);
		//this.ctx.fillText(card.suit ,card.x + (card.width/4),card.y+60);
		this.ctx.fillStyle = card.suitColor;
		this.ctx.font = "50px Helvetica";
		this.ctx.fillText(card.symbol ,card.x + card.width/15 ,card.y + card.height/4 );
		this.ctx.closePath();
	}

	renderBorder(card){
		this.ctx.beginPath();
		this.ctx.rect(card.x-2, card.y-2, card.width+4, card.height+4);
		this.ctx.strokeStyle = "red";
		this.ctx.stroke();
		this.ctx.closePath();
	}

	renderHand(){
		for(let i=0; i<this.handSize; i++){
			this.hand[i].x = (this.gameWidth/10+10) * (i+1);
			this.hand[i].y = 40;
			this.renderCard(this.hand[i]);
			if(this.hand[i].selected)this.renderBorder(this.hand[i]);
		}
	}

	renderText(){
		this.ctx.fillStyle = "black";
		this.ctx.font = "30px Helvetica";
		this.ctx.fillText(this.gameOverText + " Money: $" +this.user.score,this.gameWidth/4 ,this.gameHeight-100);
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
		for(let i=this.handSize-1; i>0; i--){
			if(this.hand[i].val > 9 || this.hand[i].val === 0){
				if(this.hand[i].val === this.hand[i-1].val) return true;
			}
		}
		return false;
	}

	twoPair(){
		let firstPair = -1;
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
		for(let i=this.handSize-1; i>0; i--){
			if(i > 1){
				if(this.hand[i].val === this.hand[i-1].val && this.hand[i].val === this.hand[i-2].val) return true;
			}
		}
		return false;
	}

	straight(){
		for(let i=0; i<this.handSize-1; i++){
			if(this.hand[i].val !== this.hand[i+1].val-1) return false;
		}
		return true;
	}

	royalStraight(){
		if(this.hand[0].val === 0 && this.hand[1].val === 9 && this.hand[2].val === 10 && this.hand[3].val === 11 && this.hand[4].val === 12)return true;
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
		this.sortByVal();
		if(this.royalFlush()){
			this.user.winStats[0].count++;
			this.user.score+=250;
			this.gameOverText = this.user.winStats[0].name;
		}
		else if(this.straightFlush()){
			this.user.winStats[1].count++;
			this.user.score+=50;
			this.gameOverText = this.user.winStats[1].name;
		}
		else if(this.fourOfAKind()){
			this.user.winStats[2].count++;
			this.user.score+=25;
			this.gameOverText = this.user.winStats[2].name;
		}
		else if(this.fullHouse()){
			this.user.winStats[3].count++;
			this.user.score+=9;
			this.gameOverText = this.user.winStats[3].name;
		}
		else if(this.flush()){
			this.user.winStats[4].count++;
			this.user.score+=6;
			this.gameOverText = this.user.winStats[4].name;
		}
		else if(this.royalStraight()){
			this.user.winStats[5].count++;
			this.user.score+=4;
			this.gameOverText = this.user.winStats[6].name;
		}
		else if(this.straight()){
			this.user.winStats[6].count++;
			this.user.score+=4;
			this.gameOverText = this.user.winStats[6].name;
		}
		else if(this.threeOfAKind()){
			this.user.winStats[7].count++;
			this.user.score+=3;
			this.gameOverText = this.user.winStats[7].name;
		}
		else if(this.twoPair()){
			this.user.winStats[8].count++;
			this.user.score+=2;
			this.gameOverText = this.user.winStats[8].name;
		}
		else if(this.jacksOrBetter()){
			this.user.winStats[9].count++;
			this.user.score+=1;
			this.gameOverText = this.user.winStats[9].name;
		}

		else{
			this.gameOverText = "Not a Winning Hand";
		}
		this.hand = this.tempHand.slice();
		this.user.handsPlayed++;
		this.user.score--;
	}

	newHand(){
		
		this.deal();
		this.clearCanvas();
		this.renderHand();
		//this.checkRules();
		this.drawButton.setAttribute("style", "visibility: visible;");
	}

	cardSelected(e){
		for(let i=0; i<this.handSize; i++){
			if(e.pageX >= this.hand[i].x && e.pageX <= this.hand[i].x+this.hand[i].width && e.pageY >= this.hand[i].y && e.pageY <= this.hand[i].y+this.hand[i].height){
				this.hand[i].selected = !this.hand[i].selected;

				this.hand[i].selected ? this.renderBorder(this.hand[i]) : this.refreshCanvas();
				console.log(this.hand[i] + i + " " + this.hand[i].selected);
				break;
			}
		}
	}

	refreshCanvas(){
		this.clearCanvas();
		this.renderHand();
	}

	draw(e){
		for(let i=0; i<this.handSize; i++){

			if(!this.hand[i].selected){
				//this.hand.splice(i,1);
				//this.hand.push(this.deck.pop());
				this.hand[i] = this.deck.pop();
			}
		}

		this.refreshCanvas();
		this.checkRules();
		this.gameOver();
	}

	gameOver(){
		this.renderText();
		this.drawButton.setAttribute("style", "visibility: hidden;");
	}
}