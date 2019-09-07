const express = require('express');

const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {
    check,
    validationResult
} = require('express-validator/check');

const User = require('../../models/user');
router.post('/',
    [
        // username cannot be null
        check('name', 'Name is Required').not().isEmpty(),
        // email should be a valid one
        check('email', 'Email should be a valid one').isEmail(),
        // password must be at least 5 chars long
        check('password', 'Enter a minimum of 6 character for password').isLength({
            min: 6
        })
    ], async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const {
            name,
            email,
            password
        } = req.body;
        try {
            let user = await User.findOne({
                email
            });
            if (user) {
                return res.status(400).json({
                    errors: [{
                        msg: 'User Already Exists'
                    }]
                });
            }
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });
            user = new User({
                name,
                email,
                avatar,
                password
            });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                {expiresIn: 360000},
                (err, token) => {
                    if(err) throw err;
                    res.json({token});
                }
                );
        } catch (error) {
            console.log(error.message);
            res.status(500).send('Server error');
        }
    });

module.exports = router;