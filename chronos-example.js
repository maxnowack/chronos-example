if (Meteor.isClient) {
  Template.timer.helpers({
    timer: function () {
      var start = Session.get('start');
      if(!start) return;
      return Chronos.liveMoment().diff(moment(start));
    }
  });

  Template.timer.events({
    'click button': function () {
      Session.set('start', new Date());
    }
  });
}
