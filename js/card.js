class Block{
	
	constructor(x, y, width, height, color="green"){
		this.width = width;
		this.height = height;
		this.color = color;
		this.margin = this.width/10;
		this.x = x;
		this.y = y;
	}

	toString(){
		return "Block";
	}
}

class Card extends Block{
  
	constructor(_val, _suit, _width, _height, _color="green"){
		super(0,0,_width,_height, _color);
		this.val = _val;
		this.suit = _suit;
		this.symbol = "";
		this.selected = false;

		if(this.suit === "Spades"){
			this.symbol = "\u2660";
			this.suitColor = "black";
		}
		else if(this.suit === "Clubs"){
			this.symbol = "\u2663";
			this.suitColor = "black";
		}
		else if(this.suit === "Hearts"){
			this.symbol = "\u2665";
			this.suitColor = "red";
		}
		else{
			this.symbol = "\u2666";
			this.suitColor = "red";
		}
		switch(this.val){
			case 0:
				this.name = "Ace";
				break;
			case 10:
				this.name = "Jack";
				break;
			case 11:
				this.name = "Queen";
				break;
			case 12:
				this.name = "King";
				break;
			default:
				this.name = String(this.val+1);
		}
	}
}