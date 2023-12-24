const Floor = require("../models/Floor")
const Room = require("../models/Room")

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

exports.getRooms=async(req,res,next) =>{
    try {
        
        const rooms = await Room.find({floorId : req.params.id}).populate('floorId')

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully floor created.',
            data : rooms
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            status : 500,
            message : error.message
        })
    }
}

exports.createRoom=async(req,res,next) =>{
    try {

        const result = await Room.find({no : Number(req.body.no)})

        if(result.length > 0){
            return res.status(500).json({
                success : false,
                status : 500,
                message : 'Already exists in room no.'
            })
        }

        const newRoom = new Room({
            ...req.body
        })

        await newRoom.save()

        await Floor.findByIdAndUpdate(req.body.floorId,{
            $push : {
                rooms : req.body.floorId
            }
        })

        return res.status(200).json({
            success : true,
            status : 200,
            message : 'Successfully room created.',
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

exports.updateRoom=async(req,res,next)=>{
    try {
        await Room.findByIdAndUpdate(req.params.id,{
            $set : {
                no :req.body.no,
                fee : req.body.fee
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