class Card{
  
	constructor(_value, _suit){
		this.value = _value;
		this.suit = _suit;
		this.symbol = "";
		if(this.suit === "spades")this.symbol = "&spades";
		else if(this.suit === "clubs")this.symbol = "&clubs";
		else if(this.suit === "hearts")this.symbol = "&hearts";
		else this.symbol = "&diamonds";
	}
}