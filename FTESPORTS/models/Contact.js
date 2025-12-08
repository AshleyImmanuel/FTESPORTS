import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters'],
        maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        trim: true,
        lowercase: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email address',
        ],
    },
    mobile: {
        type: String,
        required: [true, 'Please provide a mobile number'],
        trim: true,
        match: [
            /^[0-9]{10,15}$/,
            'Please provide a valid mobile number (10-15 digits)',
        ],
    },
    message: {
        type: String,
        required: [true, 'Please provide a message'],
        trim: true,
        minlength: [10, 'Message must be at least 10 characters'],
        maxlength: [1000, 'Message cannot exceed 1000 characters'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
