const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    doctorId:{
        type: mongoose.Types.ObjectId,
        ref : 'Doctor',
        required:true
    },
    sheduleId : {
        type: mongoose.Types.ObjectId,
        ref : 'Shedule',
        required:true
    },
    patient : {
        type: String,
        required:true
    },
    date : {
        type: Date,
        required:true
    },
},{
    timestamps:true
})

const Appointment = mongoose.model('Appointment',appointmentSchema)
module.exports = Appointment