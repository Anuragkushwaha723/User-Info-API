const User = require('../models/user');

exports.postUserData = async (req, res, next) => {
    try {
        if (!req.body.phone) {
            throw new Error('Phone Number is mandatory');
        }
        const userName = req.body.name;
        const userPhone = req.body.phone;
        const userEmail = req.body.email;
        let data = await User.create({
            name: userName,
            phone: userPhone,
            email: userEmail
        });
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}

exports.getUserData = async (req, res, next) => {
    try {
        let data = await User.findAll()
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }

};

exports.deleteUserData = async (req, res, next) => {
    try {
        const id = req.params.id;
        let data = await User.destroy({
            where: {
                id: id
            }
        });
        console.log(data);
        res.status(200).json({ id: id });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};