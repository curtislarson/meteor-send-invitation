Meteor.startup(function() {
  process.env.MAIL_URL = "smtp://" + Meteor.settings.mandrill_user + ":" +
    Meteor.settings.mandrill_password + "@smtp.mandrillapp.com:587/";
});
