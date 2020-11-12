const {model,Schema} = require('mongoose');

const BlogSchema = new Schema({
    thumb:{
        type: String,
        required:false,
        default: ""
    },
    title:{
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
},{timestamps:true})

module.exports = model('blog',BlogSchema);