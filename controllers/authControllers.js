const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.createAdmin = async (req, res, next) => {

    try {
        if (!req.body.name || !req.body.email || !req.body.phone || !req.body.password) {
            return res.redirect('/failed.html')
        }
        const hash_password = await bcrypt.hash(req.body.password, 10)

        const new_user = new User({
            ...req.body,
            isAdmin: true,
            password: hash_password
        })

        await new_user.save()

        res.redirect('/')

    } catch (err) {
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}

exports.signin = async (req, res, next) => {

    try {
        const user = await User.findOne({
            $or: [
                { email: req.body.email },
                { phone: req.body.email }
            ]
        })

        if (!user) {
            return res.status(405).json({
                success: false,
                status: 405,
                message: 'Not Found any account.'
            })
        }

        const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET)

        const isVerified = await bcrypt.compare(req.body.password, user.password)

        if (!isVerified) {
            return res.status(405).json({
                success: false,
                status: 405,
                message: 'Credentials wrong.'
            })
        }

        res.status(200).json({
            success: true,
            status: 200,
            message: 'Successfully signin.',
            token: token,
            data: user
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}