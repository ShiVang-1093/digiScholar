const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config({ path: './.env' });

const { connectToDatabase } = require('./db.js');
const { authRoutes } = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

connectToDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        });
    })
    .catch((error) => console.log(error));

app.use('/api/auth', authRoutes);
