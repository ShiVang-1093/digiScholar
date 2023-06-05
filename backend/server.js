const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { cloudinaryConfig } = require('./config');

dotenv.config({ path: './.env' });

const { connectToDatabase } = require('./db.js');
const {
    authRoutes,
    scholarshipRoutes,
    eligibilityRoutes,
    blogRoutes,
    contactRoutes,
    faqRoutes,
    resourceRoutes,
    newsRoutes,
    testimonialRoutes,
} = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

cloudinary.config(cloudinaryConfig);

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: process.env.CLOUDINARY_FOLDER,
        format: 'png',
    },
});

const upload = multer({ storage: storage });

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: false }));
app.use(cors());
app.use(upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'other_images', maxCount: 10 },
]));

app.use('/auth', authRoutes);
app.use('/scholarship', scholarshipRoutes);
app.use('/eligibility', eligibilityRoutes);
app.use('/blog', blogRoutes);
app.use('/contact', contactRoutes);
app.use('/faq', faqRoutes);
app.use('/resource', resourceRoutes);
app.use('/news', newsRoutes);
app.use('/testimonial', testimonialRoutes);

app.use('*', (req, res) => {
    res.status(404).json({ message: 'Page not found' });
});

connectToDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        });
    })
    .catch((error) => console.log(error));
