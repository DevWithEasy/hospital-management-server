const Generic = require("../models/Generic")

exports.create=async(req,res,next) =>{
    try {

        const newGeneric = new Generic({
            
        })

        return res.status(200).json({
            success : true,
            status : 200,
            message : '',
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
        return res.status(200).json({
            success : true,
            status : 200,
            message : '',
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
        return res.status(200).json({
            success : true,
            status : 200,
            message : '',
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
        return res.status(200).json({
            success : true,
            status : 200,
            message : '',
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