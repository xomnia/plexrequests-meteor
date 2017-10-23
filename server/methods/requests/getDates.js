Meteor.methods({
	"getDates": function(request) {
		check(request, Object);
		var new_dates = [];
	    new_dates = Meteor.call('releaseDates',request.id);
		var new_dvd=new_dates.dvdDate;
		var new_digital=new_dates.digitalDate;
		Movies.update(request._id, { $set: {dvd_date: new_dvd}});
		Movies.update(request._id, { $set: {digital_date: new_digital}});
	}
});