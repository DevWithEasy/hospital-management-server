const Generic = require("../models/Generic")

exports.create=async(req,res,next) =>{
    try {

        const newGeneric = new Generic({
            ...req.body
        })

        await newGeneric.save()

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Generic created successfully',
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
        await Generic.findByIdAndUpdate(req.params.id,{
            $set : {
                name : req.body.name
            }
        })
        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Generic updated successfully',
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

exports.deleteGeneric=async(req,res,next) =>{
    try {
        await Generic.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Generic deleted successfully',
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

exports.getAllGeneric=async(req,res,next) =>{
    try {
        const generics = await Generic.find({})
        return res.status(200).json({
            success : true,
            status : 200,
            message : '',
            data : generics
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}