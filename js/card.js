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
  
	constructor(_val, _suit, _width, _height){
		super(0,0,_width,_height);
		this.val = _val;
		this.suit = _suit;
		this.symbol = "";
		if(this.suit === "spades")this.symbol = "&spades";
		else if(this.suit === "clubs")this.symbol = "&clubs";
		else if(this.suit === "hearts")this.symbol = "&hearts";
		else this.symbol = "&diamonds";
	}
}