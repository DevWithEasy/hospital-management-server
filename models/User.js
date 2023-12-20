const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    hello:{
        type: String,
        required:true
    }
},{
    timestamps:true
})

const User = mongoose.model('User',userSchema)
module.exports = User