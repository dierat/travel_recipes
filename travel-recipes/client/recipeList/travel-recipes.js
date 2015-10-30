Template.travelRecipes.helpers({
  recipes: () => Recipes.find({}, {sort: {dateCreated: -1}})
});

Template.recipe.helpers({
  dateCreatedFromNow: function(){
    return moment(this.dateCreated).fromNow();
  }
});
