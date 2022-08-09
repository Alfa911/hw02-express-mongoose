import mongoose from "mongoose";
const { Schema, model } = mongoose;

const contactSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        favorite: {
            type: Boolean,
            default: false
        }
    }
);

const handleErrors = (error, data, next) => {
    error.status = 400;
    let { name, code } = error;
    if (code === 11000 || name === 'MongoServerError') {
        error.status = 409;
    }
    next();

}
contactSchema.post('save', handleErrors);
contactSchema.post('findOneAndUpdate', handleErrors);
const Contact = mongoose.model('contact', contactSchema);

export default Contact;