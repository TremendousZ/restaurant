
class Restaurant{
	constructor(menu){
		this.customerList = [];
		this.orderQueue = [];
		this.menu = menu;
		this.maximumChefs = 3;
		this.availableChefs = this.maximumChefs;
		this.updateTimer = null;
	}
	open(){
		debugger;
		//check if the updateTimer is not null.  if it isn't, the timer is running and needs to be stopped
		if( this.updateTimer !== null) {
				//stop the timer by calling closeRestaurant
				console.log("Closing Time");
			closeRestaurant();
		}
			
		//use setInterval to start a timer that runs every 1 second, and calls checkQueue
			this.updateTimer = setInterval( this.checkQueue.bind(this), 1000);
			//don't forget to bind the call or it won't work right
			//don't forget to store the result of setInterval into your updateTimer for later
	}
	close(){
		//clearInterval on the updateTimer
		clearInterval(this.updateTimer);
		//set updateTimer to null so it 
		this.updateTimer = null;
	}
	checkQueue(){
		
		// check if an order is in the orderQueue
		if( this.orderQueue.length > 0) {
			
			// if there is, reduce the availableChefs by 1
				// 	if there is, check if there is an available chef
			if (this.availableChefs > 0) {
				this.availableChefs--;
				this.startCookingOrder(this.orderQueue[0]);
				this.orderQueue.shift();
			}

		}
		// 	if there is, check if there is an available chef
		// 		if there is, reduce the availableChefs by 1
		// 		and call startCookingOrder to remove it from the pending orders
		// 		don't forget to send it the order to remove
		
	}
	addCustomer( name, hungerLevel, cash ){
		var customer = new Customer(name, hungerLevel, cash, this);
		this.customerList.push(customer);
		this.promptForOrder( customer );
		return this.customerList.length;
	}
	promptForOrder( customer ){
		console.log( `hello ${customer.name}, how can I help you today?`);
		customer.requestOrder( this.menu );
	}
	placeOrder( itemDesired, customer){
		console.log(`${customer.name} has placed an order for ${itemDesired.name}!` );
		this.addToQueue(itemDesired, customer);
	}
	addToQueue( item, customer){
		
		var orderObject = { item: item, customer: customer};
		this.orderQueue.push( orderObject );
		console.log(`*********${item.name} has been added to the queue for  ${customer.name}!`);
	}
	startCookingOrder(order){
		console.log(`*********starting on order of ${order.item.name} for ${order.customer.name}!`);
		debugger;
		var randomTime =  Math.random() * (order.item.cookingTime.max - order.item.cookingTime.min )  + order.item.cookingTime.min;
		randomTime *= 1000;
		setTimeout( this.finishCookingOrder(order), randomTime );
		//reduce the available number of chefs by 1
		this.availableChefs--;
	}
	finishCookingOrder(order){
		debugger;
		
		console.log(`*********${order.item.name} is ready for ${order.customer.name}!`);
		//increase the availableChefs count by 1
		this.availableChefs++;
	}
	removeFromQueue( completedItem ){
		var itemIndex = this.orderQueue.indexOf( completedItem );
		this.orderQueue.splice(itemIndex, 1);
	}
}






