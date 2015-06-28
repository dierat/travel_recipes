if (Meteor.isClient) {
	Template.recipeForm.events({
		"click #submitRecipe": function(event) {
			event.preventDefault();
			var recipeId = Recipes.insert({
				name: $("input[name='name']").val(),
				location: $("input[name='location']").val(),
				duration: $("input[name='duration']").val(),
				mainImage: $("input[name='mainImage']").val(),
				summary: $("textarea[name='summary']").val(),
				dateCreated: new Date(),
				userName: Meteor.user().username
			}); 
			
			Router.go("/recipes/" + recipeId)
			return false
		}
	}),
	Template.ingredientForm.events({
		"click #submitIngredient": function(event) {
			event.preventDefault();
			var recipeId = Router.current().params._id
			var selected = document.getElementById("ingredientType");
			var ingredientId = Ingredients.insert({
				type: selected.options[selected.selectedIndex].value,
				name: $("input[name='name']").val(),
				cost: $("input[name='cost']").val(),
				duration: $("input[name='duration']").val(),
				address: $("input[name='address']").val(),
				ingredientPic: $("input[name='ingredientPic']").val(),
				website: $("input[name='website']").val()
			})
			Recipes.update( {_id: recipeId},
							{$addToSet: {ingredients: ingredientId}}
			)
			Router.go("/recipes/" + recipeId)
		}
	})
}

