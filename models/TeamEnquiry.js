var keystone = require('keystone');
var Types = keystone.Field.Types;

var TeamEnquiry = new keystone.List('TeamEnquiry', {
	nocreate: true,
	noedit: true,
});

TeamEnquiry.add({

	name: {type: Types.Name, required: true},
	email: {type: Types.Email, required: true},
	student: {type: String, required: true},
	message: {type: Types.Markdown, required: true},
	createdAt: {type: Date, default: Date.now},

});

TeamEnquiry.schema.pre('save', function (next) {
	this.wasNew = this.isNew;
	next();
});

TeamEnquiry.schema.post('save', function () {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

TeamEnquiry.schema.methods.sendNotificationEmail = function (callback) {
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

TeamEnquiry.defaultSort = '-createdAt';
TeamEnquiry.defaultColumns = 'name, email, student, message, createdAt';
TeamEnquiry.register();