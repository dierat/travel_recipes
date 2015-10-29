if (Meteor.isClient) {
	Template.addIngredientToRecipe.helpers({
		isUserAndCreator: function(){
			return Meteor.user() ? Meteor.user().username === this.userName : false;
		}
	});
}