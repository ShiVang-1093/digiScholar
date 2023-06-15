const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'public/uploads/blogs',
    filename: function (req, file, cb) {
        const filename = req.body.id + '.png';
        cb(null, filename);
    }
});

const upload = multer({ storage: storage });
module.exports = upload;
