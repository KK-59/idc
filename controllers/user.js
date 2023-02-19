const userModel = require('../models/user')

const newUser = async(req, res) => {
    const {username, password}=req.body

    if (!username || !password) {
        return res.status(404).json({message:"username and password required"})
    }

    const user = await userModel.create({username, password})
    console.log("successfully created user")
    res.status(200).json(user)

}

module.exports = {newUser}