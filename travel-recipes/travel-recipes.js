if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    recipes:[
      {location: "Yosemite", name: "Yosemite", duration:"3", mainImage: "http://www.yosemitepark.com/Images/home-img-01.jpg", summary: "Yoemite high-country trip"},
       {location: "Niagara Falls", name: "Niagara Falls", duration:"5", mainImage: "http://www.yosemitepark.com/Images/home-img-01.jpg", summary: "Niagara Falls high-country trip"},
       {location: "Las Vegas", name: "Las Vegas", duration:"3", mainImage: "http://www.yosemitepark.com/Images/home-img-01.jpg", summary: "Las Vegas high-country trip"},
       {location: "California", name: "California", duration:"3", mainImage: "http://www.yosemitepark.com/Images/home-img-01.jpg", summary: "California high-country trip"},
       {location: "New York", name: "New York", duration:"3", mainImage: "http://www.yosemitepark.com/Images/home-img-01.jpg", summary: "New York high-country trip"},


    ]
  });

  Template.body.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
