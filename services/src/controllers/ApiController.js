import ModelUser from '../model/User.js'

function index(req, res){
    ModelUser.find().then(users => {
        res.status(200).json({users})
    })
}

export default index