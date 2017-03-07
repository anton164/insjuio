var keystone = require('keystone');
var Types = keystone.Field.Types;

var IdeaEnquiry = new keystone.List('IdeaEnquiry', {
	nocreate: true,
	noedit: true,
});

IdeaEnquiry.add({

	name: {type: Types.Name, required: true},
	email: {type: Types.Email, required: true},
	student: {type: String, required: true},
	idea: {type: Types.Markdown, required: true},
	experience: {type: Types.Markdown, required: true},
	createdAt: {type: Date, default: Date.now},

});

IdeaEnquiry.schema.pre('save', function (next) {
	this.wasNew = this.isNew;
	next();
});

IdeaEnquiry.schema.post('save', function () {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

IdeaEnquiry.schema.methods.sendNotificationEmail = function (callback) {
	if (typeof callback !== 'function') {
		callback = function () {};
	}
	var enquiry = this;
	keystone.list('User').model.find().where('isAdmin', true).exec(function (err, admins) {
		if (err) return callback(err);
		// new keystone.Email({
		// 	templateExt: 'hbs',
		// 	templateEngine: require('express-handlebars'),
		// 	templateName: 'enquiry-notification',
		// }).send({
		// 	to: admins,
		// 	from: {
		// 		name: 'Insj UiO',
		// 		email: 'contact@insj-uio.com',
		// 	},
		// 	subject: 'New Enquiry for Insj UiO',
		// 	enquiry: enquiry,
		// }, callback);
	});
};	

IdeaEnquiry.defaultSort = '-createdAt';
IdeaEnquiry.defaultColumns = 'name, email, student, idea, experience, createdAt';
IdeaEnquiry.register();
