Router.configure({
  layoutTemplate: 'layout'
});

Router.route("/", {name: "splashPage"});

Router.route("/recipes/add", {
  name: "recipeForm"
})

Router.route("/recipes/:_id", {
  name: "addIngredientToRecipe",
  data: function(){
    var recipe = Recipes.findOne(this.params._id);
    return recipe;
  }
})

