const User = require('../../model/user');
const Profile = require('../../model/profile');

exports.loadProfile = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username }).select('_id')

        const profile = await Profile.findOne({ user: user._id });

        res.json(profile);

    } catch (error) {

        console.log(error);
        res.status(500).json({
            message: 'Server error'
        });

    }
}

exports.createProfile = async (req, res) => {

    try {
        const { profileDetails } = req.body;

        const { user, profileImage, numRecipes, numFollowers, numLikes, tags } = profileDetails

        const profile = new Profile({
            user,
            profileImage,
            numRecipes,
            numFollowers,
            numLikes,
            tags
        });

        await profile.save();

        res.json(profile);

    } catch (error) {
        console.log(error.message);

        res.status(500).json({
            message: 'Server error'
        })
    }
}