Template.body.events({
  "submit #sendInvitation": function(event) {
    var email = event.target.email.value;
    var summary = event.target.summary.value;
    var organizer = event.target.organizer.value;
    var location = event.target.location.value;
    var start = event.target.dateStart.value;
    var end = event.target.dateEnd.value;

    Meteor.call("sendInvitation",
                email,
                summary,
                organizer,
                location,
                start,
                end,
                function(err, resp) {
      if (err) {
        console.log(err);
        alert("Error! " + err);
      }
      else {
        alert("Invitation sent!");
      }
    });

    return false;
  }
});