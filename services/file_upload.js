const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const awsConfig = require('../config/aws')

aws.config.update({
    secretAccessKey : awsConfig.AWS_SECRET,
    accessKeyId : awsConfig.AWS_KEY,
    region : 'ap-south-1'
});
const s3 = new aws.S3()

 
const upload = multer({
    
  storage: multerS3({
    s3: s3,
    bucket: awsConfig.AWS_BUCKET,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING_META_DATA'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString()+file.originalname.replace(' ','_'))
    }
  })
})

module.exports = upload;

