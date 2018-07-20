
var sim = null;
function initializeApp(){

	var mexicanFood = {
		burrito: {
			name: 'burrito supreme',
			fillingQuantity: 5,
			cookingTime:{
				min: 10,
				max: 30
			},
			cost: 4
		},
		taco: {
			name: 'carne asada taco',
			fillingQuantity: 2,
			cookingTime:{
				min: 5,
				max: 8
			},
			cost: 1.5
		},
		churro: {
			name: 'cinnamon churro',
			fillingQuantity: 1,
			cookingTime:{
				min: 2,
				max: 3
			},
			cost: 1
		}

	}
	sim = new Restaurant( mexicanFood );

	sim.addCustomer('Rebecca', 8, 20);
	sim.addCustomer('Sudip', 5, 20);
	sim.addCustomer('Jake', 1, 20);
}

initializeApp();