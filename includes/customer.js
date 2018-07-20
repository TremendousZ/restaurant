

class Customer{
	constructor( name, hungerLevel, cashOnHand, restaurantIAmIn){
		this.name = name;
		this.hungerLevel = hungerLevel;
		this.cash = cashOnHand;
		this.restaurantIAmIn = restaurantIAmIn;
	}
	requestOrder( menuChoices ){
		var possibleChoices = [];
		for(var key in menuChoices){
			if(menuChoices[key].fillingQuantity<= this.hungerLevel){
				possibleChoices.push( menuChoices[key])
			}
		}
		var randomIndex = (possibleChoices.length * Math.random()) >> 0;
		var desiredItem = possibleChoices[randomIndex];
		this.restaurantIAmIn.placeOrder( desiredItem, this);
	}
}