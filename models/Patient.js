const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    case:{
        type: String,
        required:true
    },
    floor : {
        type: mongoose.Types.ObjectId,
        required:'Floor'
    },
    room : {
        type: mongoose.Types.ObjectId,
        required:'Room'
    },
},{
    timestamps:true
})

const Patient = mongoose.model('Patient',patientSchema)
module.exports = Patient