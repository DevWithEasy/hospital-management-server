const mongoose = require('mongoose');

const purchaseSchema = mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref : 'User',
        required:true
    },
    total:{
        type: Number,
        required:true
    },
    purchaseItems:{
        type: Array,
        default : [],
        required:true
    },
},{
    timestamps:true
})

const Purchase = mongoose.model('Purchase',purchaseSchema)
module.exports = Purchase