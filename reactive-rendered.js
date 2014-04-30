if (Meteor.isClient) {
  Session.setDefault('greeting', 'Hello World!');
  Template.hello2.helpers({
    'greeting': function () {
      return Session.get('greeting');
    }
  });
  Template.hello.rendered = function () {
    var self = this;
    Deps.autorun(function () {
      self.$('.wrapper').trigger('reactive-update');
      console.log(self.data);
    });
  };

  Template.hello.events({
    'reactive-update .wrapper': function () {}
  });

}