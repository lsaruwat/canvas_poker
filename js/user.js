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


class Player extends User{

	constructor(){
		super();

		this.handsPlayed=0;
		this.winStats = [
		{name:"Royal Flush", count:0},
		{name:"Straight Flush", count:0},
		{name:"4 of a kind", count:0},
		{name:"Full House", count:0},
		{name:"Flush", count:0},
		{name:"Royal Straight", count:0},
		{name:"Straight", count:0},
		{name:"3 of a kind", count:0},
		{name:"2 pair", count:0},
		{name:"Jacks or Better", count:0}];
	}

	getStats(){
		let statString = "";
		for(let i in this.winStats){
			statString += this.winStats[i].name + ": " + this.winStats[i].count + "\r";
		}
		statString += "Hands played: " + this.handsPlayed + "\r";
		statString += "Money: $" + this.score;

		return statString;
	}
}