if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const cloudinary = require('cloudinary').v2;
const app = express();
const cors = require('cors');
const allowedOrigins = [process.env.FRONTEND_URL];

const corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (allowedOrigins.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true }
    } else {
        corsOptions = { origin: false }
    }
    callback(null, corsOptions)
}

app.use(cors(corsOptionsDelegate));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/sign-uploaded-images', (req, res) => {
    try {
        const apiSecret = process.env.CLOUDINARY_API_KEY;
        const timestamp = Math.round((new Date).getTime() / 1000);
        const signature = cloudinary.utils.api_sign_request({
            timestamp: timestamp,
            source: 'uw',
            folder: 'tamarind_uploads'
        }, apiSecret);

        return res.status(200).send({ timestamp, signature })
    }
    catch (err) {
        return res.status(500).send(err);
    }
})

app.listen(process.env.PORT, () => { })