
if (Meteor.isClient){
  Template.ingredient.helpers({
    currentIngredient: function(){
      var ingredientID = Template.instance().data;
      var ing = Ingredients.findOne({_id: ingredientID});
      return ing;
    }
  });
  //add button jQuery functionality in template name Ingredient
  Template.ingredient.events({
    "click #drop-down-button": function(){
      $(Template.instance().find(".additional-details")).slideToggle();
    }
  });


}

if (Meteor.isServer) {
  Meteor.methods({
    updateRecipes: function() {
      Recipes.update({}, {$set: {ingredients: _.pluck(Ingredients.find().fetch(), "_id")}}, {multi: true});
    }
  })
}
