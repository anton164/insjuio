var keystone = require('keystone');
var IdeaEnquiry = keystone.list('IdeaEnquiry');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'idea';
	locals.ideaFormData = req.body || {};
	locals.ideaValidationErrors = {};
	locals.ideaEnquirySubmitted = false;

	view.on('post', {action: 'ideacontact'}, function(next){

		var newIdea = new IdeaEnquiry.model();
		var updater = newIdea.getUpdateHandler(req);

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


	view.render('ideacontact');
}