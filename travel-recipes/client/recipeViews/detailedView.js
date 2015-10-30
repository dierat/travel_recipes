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
