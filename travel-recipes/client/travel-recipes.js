if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.travelRecipes.helpers({
      recipes: function(){
        return Recipes.find({}, {sort: {dateCreated: -1}})
      }
  });

  Template.registerHelper(
     'dateCreatedFromNow', function() {
      return moment(this.dateCreated).fromNow();
  })


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
