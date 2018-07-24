//引入mongodb数据库 将学生信息添加到数据库中

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type: Number
    },
    gender:{
        type:Number,
        enum:[0,1],
        default:0
    },
    hobbies:{
        type:String
    }
});

module.exports = mongoose.model('Student',studentSchema);
