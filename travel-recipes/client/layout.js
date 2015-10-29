if (Meteor.isClient) {
	Template.layout.helpers({
	   username: function(){
	     return Meteor.user().username;
	   }
	 });
}