
class Restaurant{
	constructor(menu){
		this.customerList = [];
		this.orderQueue = [];
		this.menu = menu;
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
		console.log(`${itemDesired.name} is cooking for ${customer.name}!` );
		this.addToQueue(itemDesired, customer);
	}
	addToQueue( item, customer){
		debugger;
		var orderObject = { item: item, customer: customer};
		var randomTime =  Math.random() * (item.cookingTime.max - item.cookingTime.min )  + item.cookingTime.min;
		randomTime *= 1000;
		this.orderQueue.push( orderObject );
		setTimeout( this.removeFromQueue.bind(this,orderObject), randomTime )
		
	}
	removeFromQueue( completedItem ){
		var itemIndex = this.orderQueue.indexOf( completedItem );
		console.log(`*********${completedItem.item.name} is ready for ${completedItem.customer.name}!`);
		this.orderQueue.splice(itemIndex, 1);
	}
}






