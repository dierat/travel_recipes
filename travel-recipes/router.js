Router.configure({
  layoutTemplate: 'layout'
});

Router.route("/", {name: "mainPage"});

Router.route("/recipes/add", {
  name: "recipeForm"
});

Router.route("/recipes/:_id", {
  name: "recipe",
  data() {
    var recipe = Recipes.findOne(this.params._id);
    return recipe;
  }
});
