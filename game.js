class Game {
  
	constructor() {
		this.state = "started";
		this.canvas = null;
		this.gameName = "Game";
		this.dom = document.getElementsByTagName("html")[0];
		
		if(window.innerWidth < 1000){
			this.gameHeight = window.innerHeight - 150;
		}
		else this.gameHeight = window.innerHeight;
		
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
		if(width < 1000){
			this.canvas.setAttribute("style", "border-bottom: solid 2px black;");
		}
		this.canvas.height = height;
		element.appendChild(this.canvas);
	}

	toString(){
		return this.gameName;
	}

	addEventListener(domEvent, functionRef, bubbles=false){
		window.addEventListener(domEvent, functionRef.bind(this), bubbles);
	}
}