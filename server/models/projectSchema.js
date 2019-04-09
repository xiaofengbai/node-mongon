let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let projectShema = new Schema({
    name: { type: String, required: true, unique: true },
    createTime: { type: Date, default: Date.now },
    title: String,
    id: "ObjectId",
    attr: {
        type: String,
        desc: String
    }
});
let project = mongoose.model('project', projectShema, 'projects');
module.exports = project;