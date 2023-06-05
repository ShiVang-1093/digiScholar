const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './.env' });

const { connectToDatabase } = require('./db.js');
const {
    authRoutes,
    contactRoutes,
    faqRoutes,
    resourceRoutes,
    newsRoutes,
    testimonialRoutes,
} = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/auth', authRoutes);
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
