Meteor.methods({
  sendInvitation: function(email, summary, organizer, location, start, end) {
    var cal = ical({
    });
    cal.events([
      {
        summary: summary,
        organizer: {
          name: organizer,
          email: "noreply@curtismlarson.com"
        },
        location: location,
        start: new Date(start),
        end: new Date(end)
      }
    ]);

    Email.send({
      from: "noreply@curtismlarson.com",
      to: email,
      subject: "Your Invitation!",
      text: "Hello! Your invitation is attached",
      attachments: [{
        fileName: "event.ics",
        contentType: "text/calendar",
        contents: cal.toString()
      }]
    });
  }
});