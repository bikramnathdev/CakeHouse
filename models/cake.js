const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
    name :{
        type: String,
        required :true
    },
    flavour :{
        type: String,
    },
    frosting:{
        type: String,
    },
    image:{
        type:String
    },
    weight:{
        type: String,
    },
    price:{
        type : Number,
    }
});

module.exports = Cake = mongoose.model('cake',CakeSchema);