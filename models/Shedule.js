const mongoose = require('mongoose');

const sheduleSchema = mongoose.Schema({
    doctorId:{
        type: mongoose.Types.ObjectId,
        ref : 'Doctor',
        required:true
    },
    day:{
        type: String,
        required:true
    },
    from:{
        type: String,
        required:true
    },
    to:{
        type: String,
        required:true
    },
},{
    timestamps:true
})

const Shedule = mongoose.model('Shedule',sheduleSchema)
module.exports = Shedule