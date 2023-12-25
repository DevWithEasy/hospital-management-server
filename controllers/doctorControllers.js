const imagekit = require("../config/imageKit")
const Doctor = require("../models/Doctor")
const Shedule = require("../models/Shedule")

exports.create = async (req, res, next) => {
    try {

        const image = await imagekit.upload({
            file: req.file.buffer,
            fileName: req.file.originalname,
            folder: 'hospital_management',
        })

        const newDoctor = new Doctor({
            ...req.body,
            image: {
                id: image.fileId,
                url: image.url
            }
        })

        const doctor = await newDoctor.save()

        return res.status(200).json({
            success: true,
            status: 200,
            message: '',
            data: doctor
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
        const doctor = await Doctor.findById(req.params.id)

        const updateDoc = {
            name: req.body.name,
            specialist: req.body.specialist,
            education: req.body.education,
            experienceArea: req.body.experienceArea,
            consultationFee: req.body.consultationFee
        }

        if (!req.file) {

            await Doctor.findByIdAndUpdate(req.params.id, {
                $set: {
                    ...updateDoc
                }
            })

            return res.status(200).json({
                success: true,
                status: 200,
                message: 'Doctor updated successfully',
                data: {}
            })

        } else {

            const image = await imagekit.upload({
                file: req.file.buffer,
                fileName: req.file.originalname,
                folder: 'hospital_management',
            })

            await imagekit.deleteFile(doctor.image.id)

            await Doctor.findByIdAndUpdate(req.params.id, {
                $set: {
                    ...updateDoc,
                    'image.id': image.fileId,
                    'image.url': image.url
                }
            })

            return res.status(200).json({
                success: true,
                status: 200,
                message: 'Doctor updated successfully',
                data: {}
            })
        }

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
        const doctor = await Doctor.findById(req.params.id)

        await imagekit.deleteFile(doctor.image.id)

        await Doctor.findByIdAndDelete(req.params.id)

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Doctor successfully deleted',
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

        const doctors = await Doctor.find({}).populate('shedules')

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
        const doctor = await Doctor.findById(req.params.id).populate('shedules')

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Docto find successfully.',
            data: doctor
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: error.message
        })
    }
}

exports.createShedule = async (req, res, next) => {
    try {

        const newShedule = new Shedule({
            ...req.body,
        })

        const shedule = await newShedule.save()

        await Doctor.findByIdAndUpdate(req.params.d_id,{
            $push : {
                shedules : shedule._id
            }
        }) 

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Shedule created successfully.',
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

exports.updateShedule = async (req, res, next) => {
    try {

        await Shedule.findByIdAndUpdate(req.params.id,{
            $set : {
                day : req.body.day,
                from : req.body.from,
                to : req.body.to
            }
        }) 

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Shedule updated successfully.',
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

exports.deleteShedule = async (req, res, next) => {
    try {

        const shedule = await Shedule.findById(req.params.id)

        await Shedule.findByIdAndDelete(req.params.id)

        await Doctor.findByIdAndUpdate(shedule.doctorId,{
            $pull : {
                shedules : shedule._id
            }
        }) 

        return res.status(200).json({
            success: true,
            status: 200,
            message: 'Shedule deleted successfully.',
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