const Floor = require("../models/Floor")

exports.create=async(req,res,next) =>{
    try {
        const newFloor = new Floor({
            ...req.body
        })

        await newFloor.save()

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully floor created.',
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

exports.getAllFloor=async(req,res,next) =>{
    try {
        const floors = await Floor.find({})

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully floor created.',
            data : floors
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}