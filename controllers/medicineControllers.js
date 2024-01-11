const Medicine = require("../models/Medicine")

exports.create=async(req,res,next) =>{
    try {
        console.log(req.body)
        const newMedicine = new Medicine({
            ...req.body
        })

        await newMedicine.save()

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Medicine created successfully',
            data : {}
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.update=async(req,res,next) =>{
    try {
        await Medicine.findByIdAndUpdate(req.params.id,{
            $set : {
                name : req.body.name,
                type : req.body.type,
                generic : req.body.generic,
                price : req.body.price
            }
        })
        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Medicine updated successfully',
            data : {}
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.deleteMedicine=async(req,res,next) =>{
    try {
        await Medicine.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Medicine deleted successfully',
            data : {}
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.getAllMedicine=async(req,res,next) =>{
    try {
        const medicines = await Medicine.find({}).populate('generic')
        return res.status(200).json({
            success : true,
            status : 200,
            message : '',
            data : medicines
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}