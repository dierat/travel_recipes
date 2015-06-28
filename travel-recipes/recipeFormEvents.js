if (Meteor.isClient) {
	Template.recipeForm.events({
		"click #submitRecipe": function(event) {
			event.preventDefault();
			var recipeId = Recipes.insert({
				name: $("input[name='name']").val(),
				location: $("input[name='location']").val(),
				duration: $("input[name='duration']").val(),
				mainImage: $("input[name='mainImage']").val(),
				summary: $("textarea[name='summary']").val()
			}); 
			
			Router.go("/recipes/" + recipeId)
			return false
		}
	})
}