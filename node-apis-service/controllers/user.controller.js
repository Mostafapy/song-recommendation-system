const UserModel = require('./../models/user.model');

// @desc Create User
// @route POST /api/v1/users
// @access Public
const createUser = async (req, res) => {
    try {
        // Create user
        const user = await UserModel.create(req.body);

        res.status(200).json({ 
           success: true, 
           msg: "successfully one user created",
           data: user 
        });  
    } catch (err) {
        console.error(err.stack);
        res.status(400).json({ 
            success: false, 
            msg: err.message,
            data: null 
        });  
    }
}

module.exports = {
    createUser
}