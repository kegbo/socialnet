var mongoose = require('mongoose');

module.export = mongoose.model('user',{

	email: String,
	password: String
});