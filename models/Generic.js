const mongoose = require('mongoose');

const genericSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    }
},{
    timestamps:true
})

const Generic = mongoose.model('Generic',genericSchema)
module.exports = Generic