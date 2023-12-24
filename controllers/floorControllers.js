const Floor = require("../models/Floor")

exports.create=async(req,res,next) =>{
    try {

        const result = await Floor.find({no : Number(req.body.no)})

        if(result.length > 0){
            return res.status(500).json({
                success : false,
                status : 500,
                message : 'Already exists in floor no.'
            })
        }

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

exports.update=async(req,res,next)=>{
    try {
        await Floor.findByIdAndUpdate(req.params.id,{
            $set : {
                name :req.body.name,
                no : req.body.no
            }
        })
        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully updated floor.',
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

exports.deleteData=async(req,res,next)=>{
    try {
        await Floor.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully deleted floor.',
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