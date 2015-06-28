Router.configure({
  layoutTemplate: 'layout'
});

Router.route("/", {name: "travelRecipes"});

Router.route("/recipes/:_id", {
  name: "recipeItem",
  data: function(){ return Recipes.findOne(this.params._id); }
})

Router.route("/recipes/add", {
  name: "recipeForm"
})
