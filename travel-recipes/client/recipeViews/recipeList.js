Template.travelRecipes.helpers({
  recipes: () => Recipes.find({}, {sort: {dateCreated: -1}})
});

Template.recipeSummary.helpers({
  dateCreatedFromNow: function(){
    return moment(this.dateCreated).fromNow();
  },

  recipeImage: function() {
    return this.mainImage || "tripicon.png";
  }
});
