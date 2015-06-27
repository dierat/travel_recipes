if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.travelRecipes.helpers({
    recipes:[
      {_id: "fake", location: "Yosemite", name: "Yosemite", duration:"3", mainImage: "http://www.yosemitepark.com/Images/home-img-01.jpg", summary: "Yoemite high-country trip"},
       {_id: "fake2", location: "Niagara Falls", name: "Niagara Falls", duration:"5", mainImage: "http://www.yosemitepark.com/Images/home-img-01.jpg", summary: "Niagara Falls high-country trip"},
       {_id: "fake3", location: "Las Vegas", name: "Las Vegas", duration:"3", mainImage: "http://www.yosemitepark.com/Images/home-img-01.jpg", summary: "Las Vegas high-country trip"},
       {_id: "fake4", location: "California", name: "California", duration:"3", mainImage: "http://www.yosemitepark.com/Images/home-img-01.jpg", summary: "California high-country trip"},
       {_id: "fake5", location: "New York", name: "New York", duration:"3", mainImage: "http://www.yosemitepark.com/Images/home-img-01.jpg", summary: "New York high-country trip"},


    ]
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
