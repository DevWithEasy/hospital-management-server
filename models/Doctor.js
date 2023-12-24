const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    specialist: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    experienceArea: {
        type: String,
        required: true
    },
    consultationFee: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
})

const Doctor = mongoose.model('Doctor', doctorSchema)
module.exports = Doctor