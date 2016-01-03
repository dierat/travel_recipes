Template.recipe.onRendered(()=> {
  window.scrollTo(0, 0);
});

Template.recipe.helpers({
  isUserAndCreator() {
    return Meteor.user() ? Meteor.user().username === this.userName : false;
  }
});

Template.ingredient.helpers({
  currentIngredient() {
    const ingredientID = Template.instance().data;
    const ing = Ingredients.findOne({_id: ingredientID});
    return ing;
  }
});

//add button jQuery functionality in template name Ingredient
Template.ingredient.events({
  "click #drop-down-button"() {
    $(Template.instance().find(".additional-details")).slideToggle();
  }
});
