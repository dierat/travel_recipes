Template.recipeForm.events({
	"click #submitRecipe": (event) => {
		event.preventDefault();

		const recipeId = Recipes.insert({
			name: $("input[name='name']").val(),
			location: $("input[name='location']").val(),
			startTime: $("startTime").val(),
			duration: $("input[name='duration']").val(),
			mainImage: $("input[name='mainImage']").val(),
			summary: $("textarea[name='summary']").val(),
			dateCreated: new Date(),
			userName: Meteor.user().username
		});

		Router.go("/recipes/" + recipeId);
		return false;
	}
});



Template.ingredientForm.onRendered(() => {
	Session.setDefault('ingredientType', 'transportation');
});

Template.ingredientForm.helpers({
	isTransportation: () => Session.equals('ingredientType', 'transportation')
});

Template.ingredientForm.events({
	"change #ingredientType": () => {
		const ingredientType = $('#ingredientType').val();
		Session.set('ingredientType', ingredientType);
	},

	"click #submitIngredient": function(event) {
		event.preventDefault();

		const recipeId = Router.current().params._id;
		const selected = document.getElementById("ingredientType");

		const ingredientId = Ingredients.insert({
			type: selected.options[selected.selectedIndex].value,
			name: $("input[name='name']").val(),
			cost: $("input[name='cost']").val(),
			duration: $("input[name='duration']").val(),
			address: $("input[name='address']").val(),
			ingredientPic: $("input[name='ingredientPic']").val(),
			website: $("input[name='website']").val(),
			notes: $("input[name='notes']").val()
		});

		$("input[name='name']").val('');
		$("input[name='cost']").val('');
		$("input[name='duration']").val('');
		$("input[name='address']").val('');
		$("input[name='ingredientPic']").val('');
		$("input[name='website']").val('');
		$("input[name='notes']").val('');

		Recipes.update(
			{_id: recipeId},
			{$addToSet: {ingredients: ingredientId}}
		);
	}
});
