const authRouters = require('./authRouters')
const floorRouters = require('./floorRouters')
const doctorRouters = require('./doctorRouters')
const genericRouters = require('./genericRouters')
const medicineRouters = require('./medicineRouters') 

const routers = [
    {
        path : '/api/auth',
        handler : authRouters
    },
    {
        path : '/api/floor',
        handler : floorRouters
    },
    {
        path : '/api/doctor',
        handler : doctorRouters
    },
    {
        path : '/api/generic',
        handler : genericRouters
    },
    {
        path : '/api/medicine',
        handler : medicineRouters
    },
    {
        path : '/',
        handler : (req,res) =>{
            res.json({
                status : 200,
                success : true,
                message : 'Server successfully running...'
            })
        }
    }
]

const applyRouter = (app) =>{
    routers.map(r=>{
        if(r.path === '/'){
            app.get(r.path,r.handler)
        }else{
            app.use(r.path,r.handler)
        }
    })
}

module.exports = applyRouter