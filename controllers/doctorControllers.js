const imagekit = require("../config/imageKit")
const Doctor = require("../models/Doctor")

exports.create = async (req, res, next) => {
    try {

        const image = await imagekit.upload({
            file: req.file.buffer,
            fileName: req.file.originalname,
            folder: 'hospital_management'
        })

        const newDoctor = new Doctor({
            ...req.body,
            image : {
                name : image.name,
                url : image.url
            }
        })

        const doctor = await newDoctor.save()

        return res.status(200).json({
            success: true,
            status: 200,
            message: '',
            data: newDoctor
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.update = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            status: 200,
            message: '',
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.deleteDoctor = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            status: 200,
            message: '',
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.getAllDoctor = async (req, res, next) => {
    try {

        const doctors = await Doctor.find({})

        return res.status(200).json({
            success: true,
            status: 200,
            message: '',
            data: doctors
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.getDoctor = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            status: 200,
            message: '',
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}