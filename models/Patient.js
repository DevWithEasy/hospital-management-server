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
    entryfee : {
        type: Number,
        required:true,
        default : 300
    },
    doctor : {
        type: mongoose.Types.ObjectId,
        required:'Doctor'
    },
    doctorFee : {
        type: Number,
        required:true,
        default : 900
    },
    outTime : {
        type : Date
    }
},{
    timestamps:true
})

const Patient = mongoose.model('Patient',patientSchema)
module.exports = Patient