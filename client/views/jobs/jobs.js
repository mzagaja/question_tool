var myJobs = JobCollection('myJobQueue');

Meteor.startup(function () {
	Meteor.subscribe('allJobs');
	console.log(myJobs.getJob('dHKk44vdwZC5Tww5w'));

	TabularJobCollections({
	  taskQueue: {
	    collection: myJobs,
	    allow: function (userId) {
	      var role = new Roles.User(userId);
	      return role.is(Roles.ADMIN);
	    }
	  }
	});
});