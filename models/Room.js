const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    floorId:{
        type: mongoose.Types.ObjectId,
        ref : 'Floor',
        required:true
    },
    no :{
        type : Number,
        required : true
    },
    fee : {
        type : Number,
        required : true
    },
    isAvailable : {
        type : Boolean,
        default : true,
        required : true
    }
},{
    timestamps:true
})

const Room = mongoose.model('Room',roomSchema)
module.exports = Room