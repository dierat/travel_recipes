if (Meteor.isClient) {
	Template.recipeForm.events({
		"click #submitRecipe": function(event) {
			event.preventDefault();
			Recipes.insert({
				name: $("input[name='name']").val(),
				location: $("input[name='location']").val(),
				duration: $("input[name='duration']").val(),
				mainImage: $("input[name='mainImage']").val(),
				summary: $("textarea[name='summary']").val()
			}); 
			$("input[name='name']").val("") 
			$("input[name='location']").val("") 
			$("input[name='duration']").val("") 
			$("input[name='mainImage']").val("") 
			$("textarea[name='summary']").val("") 
			

			console.log("clicked")
			return false
		}
	})
}