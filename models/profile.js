const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    dob :{
        type : Date,
        default : Date.now
    },
    address: {
        type: String,
        required : true
    },
    occupation:{
        type: String,
        required: true
    },
    image:{
        type:String
    }
});

module.exports = Profile = mongoose.model('profile',ProfileSchema);