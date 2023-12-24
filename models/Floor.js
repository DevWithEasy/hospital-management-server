const mongoose = require('mongoose');

const floorSchema = mongoose.Schema({
    name : {
        type: String,
        required:true
    },
    no:{
        type: Number,
        required:true
    },
    rooms : {
        type: [
            {
                type: mongoose.Types.ObjectId,
                ref : 'Room'
            }
        ],
        default : [],
        required : true
    }
},{
    timestamps:true
})

const Floor = mongoose.model('Floor',floorSchema)
module.exports = Floor