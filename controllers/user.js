const jwtoken = require('jsonwebtoken');
const encryptPassword = require('../helpers/encryptPassword');

const User = require('../model/user');

exports.register = async (req, res) => {

    const { name, username, email, password } = req.body;

    try {

        //CHECK IF USER IS REGISTERED
        let user = await User.findOne({ email });

        if (user) {
            return res.json({
                message: 'Email is already registered'
            });
        } else {
            let findUsername = await User.findOne({ username })

            if (findUsername) {
                return res.json({
                    message: 'Username is already registered'
                })
            }
        }

        //ENCRYPT PASSWORD
        const encryptedPassword = await encryptPassword(password);

        //CREATE NEW USER OBJECT
        user = new User({
            name,
            username,
            email,
            password: encryptedPassword
        });

        //SAVE USER
        await user.save();

        //CREATE JSONWEBTOKEN
        const payload = {
            user: {
                id: user.id
            }
        }

        jwtoken.sign(
            payload,
            process.env.JSONWEBTOKEN,
            { expiresIn: 40000 },
            (error, token) => {
                if (error) {
                    throw error
                }

                res.json({ token })

            }
        )

    } catch (error) {
        console.log(error.message);
        res.json({
            message: 'Server error'
        })
    }
}