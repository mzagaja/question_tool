var myJobs = JobCollection('myJobQueue');

myJobs.allow({
  // Grant full permission to any authenticated user
  admin: function (userId, method, params) {
    return (userId ? true : false);
  }
});

Meteor.startup(function () {
	// Email of Question Tool super admin. Has control over Instances, etc.
	process.env.SUPERADMIN_EMAIL = 'questiontool@admin.com';
	// URL of mail server goes here for email sending
	process.env.MAIL_URL = 'http://localhost:3000/';

	Meteor.publish('allJobs', function () {
	  return myJobs.find({});
	});

	return myJobs.startJobServer();
});