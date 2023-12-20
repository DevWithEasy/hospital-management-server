const mongoose = require('mongoose');

const MedicineSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    type : {
        type : String,
        enum : ['Tablet','Capsule','Syrup','Others'],
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    stock :{
        type : Number,
        default : 0,
        required : true
    }
},{
    timestamps:true
})

const Medicine = mongoose.model('Medicine',MedicineSchema)
module.exports = Medicine