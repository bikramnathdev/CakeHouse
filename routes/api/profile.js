const express = require('express');

const router = express.Router();
const Profile = require('../../models/profile');
const User = require('../../models/user');
const auth = require('../../middleware/auth');
router.get('/me',auth,async (req,res,next) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user',
        ['name','avatar']);
        if (!profile) {
            return res.status(400).json({
                msg : 'There is no profile for this User!'
            });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            msg : "Server Error"
        });
    }
});

module.exports = router;