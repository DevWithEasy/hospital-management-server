const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    image : {
        type: String,
    },
    isAdmin:{
        type: Boolean,
        default: false,
        required:true
    },
    user_type:{
        type: String,
        enum : ['Admin','reciption','pharmecy','Laboratory',],
        default : 'Admin',
        required:true
    },
},{
    timestamps:true
})

const User = mongoose.model('User',userSchema)
module.exports = User