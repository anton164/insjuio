var keystone = require('keystone');
var TeamEnquiry = keystone.list('TeamEnquiry');	

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'team';
	locals.teamFormData = req.body || {};
	locals.teamValidationErrors = {};
	locals.teamEnquirySubmitted = false;

	view.on('post', {action: 'teamcontact'}, function(next){

		var newTeam = new TeamEnquiry.model();
		var updater = newTeam.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, student, message',
			errorMessage: 'There was a problem submitting your enquiry:',
		}, function (err){
			if(err){
				locals.teamValidationErrors = err.errors;
			} else {
				locals.teamEnquirySubmitted = true;
			}
			next();
		});
	});


	view.render('teamcontact');

}
