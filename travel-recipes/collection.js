Recipes = new Mongo.Collection("recipes");
Ingredients = new Mongo.Collection("ingredients");

if (Meteor.isServer) {
	Meteor.startup(function () {
		if (Recipes.find().count() === 0) {
			Recipes.insert({
				name: "French Wine Tour",
				location: "France",
				duration: 3,
				mainImage: "http://1af60cd74e95fe387bc8-1bfee98aeb105b45275a9419b6310abb.r63.cf1.rackcdn.com/164/2/large.jpg",
				summary: "This will be so cool!",
				ingredients: ["ing1", "ing2", "ing3"]
			}, {
				name: "Our Trip",
				location: "Australia",
				duration: 24,
				mainImage: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSu70QunAdWz8tA0NulCGphvFhvipWDQFv34hw6ncdo6GFvaXjL",
				summary: "All-over Austrailia",
				ingredients: ["ing1", "ing2", "ing3"]
			}, {
				name: "Backpacking",
				location: "Yosemite",
				duration: 6,
				mainImage: "http://www.yosemitepark.com/Images/home-img-01.jpg",
				summary: "Yoemite high-country trip",
				ingredients: ["ing1", "ing2", "ing3"]
			});
		}
		if (Ingredients.find().count() === 0) {
			Ingredients.insert({
				name: "Grand Hotel",
				type: "lodging",
				duration: 3,
				cost: 85,
				address: "123 Main St., Paris, France",
				website: "www.grandhotel.com"
			}, {
				name: "wine",
				type: "activity",
				duration: 4,
				cost: 95,
				address: "223 Main St., Paris, France",
				website: "www.champagne.com"
			}, {
				name: "taxi",
				type: "transportation",
				duration: 1,
				cost: 25,
				address: "523 Main St., Paris, France",
				website: "www.yellowtaxi.com"
			});
		}
	})
}