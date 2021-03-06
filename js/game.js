class Game {
  
	constructor() {
		this.state = "started";
		this.canvas = null;
		this.gameName = "Game";
		this.dom = document.getElementsByTagName("html")[0];
		this.gameHeight = window.innerHeight;
		this.gameWidth = window.innerWidth;
		this.createCanvas(this.gameWidth, this.gameHeight);
		this.user = new User();
		this.user.score = 0;
		
	}

	isMobile(){
		let check = false;
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) check = true;

		return check;
	}

	createCanvas(width, height, element=document.getElementsByTagName("body")[0] ){
		this.canvas = document.createElement("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.canvas.width = width;
		this.canvas.height = height;
		element.appendChild(this.canvas);
	}

	clearCanvas(){
		this.ctx.clearRect(0,0,this.gameWidth, this.gameHeight);
	}

	toString(){
		return this.gameName;
	}

	addEventListener(domEvent, functionRef, domElement=window, bubbles=false){
		domElement.addEventListener(domEvent, functionRef.bind(this), bubbles);
	}
}