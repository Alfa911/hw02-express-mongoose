import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactsRouter from './routes/api/contacts.js';
import 'dotenv/config';

const {HOST_DB, API_PORT = 3000} = process.env;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/contacts', contactsRouter);
app.use((error, req, res, next) => {
    const {message = "Unknown error", status = 500} = error;
    res.status(status).json({message: message});
});
app.use( (req, res) => {
    const message = "Page not found";
    const status = 404;
    res.status(status).json({message: message});
});

mongoose.connect(HOST_DB).then(() => {
    app.listen(API_PORT, () => console.log('Running on ' + API_PORT));
}).catch((e) => {
    console.error(e);
    process.exit(1)
});
