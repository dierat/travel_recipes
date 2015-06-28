if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.travelRecipes.helpers({
      recipes: function(){
        return Recipes.find()
      }
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
