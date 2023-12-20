const mongoose = require('mongoose');

const floorSchema = mongoose.Schema({
    floorNo:{
        type: Number,
        required:true
    }
},{
    timestamps:true
})

const Floor = mongoose.model('Floor',floorSchema)
module.exports = Floor