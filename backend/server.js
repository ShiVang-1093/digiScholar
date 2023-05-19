const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
app.use(cors());
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

// Sample get request
app.get('/', (req, res) => {
    res.send("The server is started");
})
app.listen(PORT, () => {
    console.log(`The server is started on the port ${PORT}`);
})