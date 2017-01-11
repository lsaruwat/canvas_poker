class User{
	
	constructor(){
		this.name ="John Doe";
		this.lives = 5;
		this.score = 0;
	}

	setName(name){
		this.name = name;
	}

	getName(){
		return this.name;
	}

	addLives(lives){
		this.lives += lives;
	}

	toString(){
		return this.name + " " + this.lives;
	}
}