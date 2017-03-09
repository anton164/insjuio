var keystone = require('keystone');
var TeamEnquiry = keystone.list('TeamEnquiry');
var IdeaEnquiry = keystone.list('IdeaEnquiry');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	
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

	locals.ideaFormData = req.body || {};
	locals.ideaValidationErrors = {};
	locals.ideaEnquirySubmitted = false;

	view.on('post', {action: 'ideacontact'}, function(next){

		var newIdea = new IdeaEnquiry.model();
		updater = newIdea.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true,
			fields: 'name, email, student, idea, experience',
			errorMessage: 'There was a problem submitting your enquiry:',
		}, function (err){
			if(err){
				locals.validationErrors = err.errors;
			} else {
				locals.ideaEnquirySubmitted = true;
			}
			next();
		});
	});

	locals.section = 'home';

	// Render the view
	view.render('index');
};
