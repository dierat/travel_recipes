Template.ingredient.helpers({
  'currentIngredient': function(){
    var ingredientID = this;
    return Ingredients.find({_id: ingredientID});
  }
});
