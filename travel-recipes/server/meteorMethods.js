Meteor.methods({
  updateRecipes: function() {
    Recipes.update({}, {$set: {ingredients: _.pluck(Ingredients.find().fetch(), "_id")}}, {multi: true});
  },
  deleteRecipe: function(id){
    Recipes.remove(id);
  }
});
