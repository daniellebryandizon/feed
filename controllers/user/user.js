const jwtoken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const encryptPassword = require('../../helpers/encryptPassword');
const generateToken = require('../../helpers/generateToken');

const User = require('../../model/user');

exports.getUser = async (req, res) => {

    const user = await User.findById(req.user.id).select('-password');

    res.json(user);

}

exports.register = async (req, res) => {

    const { name, username, email, password } = req.body;

    try {
        //CHECK IF USER IS REGISTERED
        let user = await User.findOne({ username });
        console.log(password);
        if (user) {
            return res.json({
                message: 'Username is already registered'
            });
        } else {
            let findEmail = await User.findOne({ email })

            if (findEmail) {
                return res.json({
                    message: 'Email is already registered'
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

        const accessToken = generateToken(payload);

        res.cookie('token', accessToken, { httpOnly: true });

        res.send('Successful registration!');

    } catch (error) {
        console.log(error.message);
        res.json({
            message: 'Server error'
        })
    }
}

exports.login = async (req, res) => {

    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        //CHECK IF USER IS EXISTING
        if (!user) {
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }

        //CHECK IF PASSWORD IS CORRECT
        const decryptPassword = await bcrypt.compare(password, user.password);

        if (!decryptPassword) {
            return res.status(401).json({
                message: 'Invalid credentials'
            })
        }

        //CREATE JSONWEBTOKEN
        const payload = {
            user: {
                id: user.id
            }
        }

        const accessToken = generateToken(payload);

        res.cookie('token', accessToken, { httpOnly: true });

        res.send('Successful login!');

    } catch (error) {

        console.log(error.message)
        res.status(500).json({
            message: 'Server error'
        });

    }
}

exports.logout = async (req, res) => {

    try {

        res.clearCookie('token');

        res.send('Successful logout!');

    } catch (error) {

        console.log(error.message);
        
        res.status(500).json({
            message: 'Server error'
        });

    }


}