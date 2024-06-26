const mongoose = require('mongoose');

const UserVerificationSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    uniqueString: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    expiresAt: { // Correction de l'orthographe
        type: Date,
    },
});

const UserVerification = mongoose.model('UserVerification', UserVerificationSchema);

module.exports = UserVerification;