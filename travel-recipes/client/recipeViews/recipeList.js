Template.mainPage.onRendered(()=> {
  window.scrollTo(0, 0);
});

Template.mainPage.helpers({
  recipes: () => Recipes.find({}, {sort: {dateCreated: -1}})
});

Template.recipeSummary.helpers({
  dateCreatedFromNow() {
    return moment(this.dateCreated).fromNow();
  },

  recipeImage: function() {
    return this.mainImage || "/tripicon.png";
  }
});
