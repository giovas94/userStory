var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var StorySchema = new Schema({
	creator: {type: Schema.Types.Object, ref: 'User'},
	content: String, 
	created: { type: Date, defauly: Date.now}
});

module.exports = mongoose.model('Story', StorySchema);