Template.addIngredientToRecipe.helpers({
  isUserAndCreator: function(){
    return Meteor.user() ? Meteor.user().username === this.userName : false;
  }
});
Template.ingredient.helpers({
  currentIngredient: function(){
    const ingredientID = Template.instance().data;
    const ing = Ingredients.findOne({_id: ingredientID});
    return ing;
  }
});
//add button jQuery functionality in template name Ingredient
Template.ingredient.events({
  "click #drop-down-button": function(){
    $(Template.instance().find(".additional-details")).slideToggle();
  }
});
