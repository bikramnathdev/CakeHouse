const express = require('express');

const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator/check');
const auth = require('../../middleware/auth');
const upload = require('../../services/file_upload');
const Cake = require('../../models/cake');
const awsConfig = require('../../config/aws');
const bucket = awsConfig.AWS_BUCKET;

router.get('/', async (req, res, next) => {
    try {
        let imageUrl = [];
        const posts = await Cake.find().sort({ date : -1 });
        posts.forEach(element => {
            fileName = element.image;
            var s3url = "https://"+bucket+".s3.amazonaws.com/"+fileName;
            imageUrl.push(s3url);
        });
        console.log('url:' + imageUrl);
        res.status(200).json(posts);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const post = await Cake.findById(req.params.id);
        if (!post) {
            return res.status(404).json( {msg: "Item not found"} );
        }
        res.status(200).json(post);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
});

router.post('/', auth, upload.single('image'), async (req, res, next) => {
    const errors = validationResult(req);
    const {
        name,
        flavour,
        frosting,
        weight,
        price
    } = req.body;
    const image = req.file.key;

    try {
        let cake = new Cake({
            name,
            flavour,
            frosting,
            image,
            weight,
            price
        });
        const cakePost = await cake.save();
        res.status(200).json(
            cakePost
        )
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }

});
router.delete('/:id', auth, async (req, res, next) => {
    try {
        const post = await Cake.findById(req.params.id);
        if (!post) {
            return res.status(404).json( {msg: "Item not found"} );
        }
        await post.remove();
        res.json({ msg : "Item removed" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
});
module.exports = router;