const mongoose = require('mongoose');

const SubmissionSchema = mongoose.Schema({
    name: { type: String, index: true, required: true, unique: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    videourl: { type: String, required: false },
    description: { type: String, minlength: 18, required: true },
    votes: { type: [String], required: false },
    status: { type: Boolean, required: true, default: true },
    created: { type: Date, index: true, default: Date.now },
    updated: { type: Date, index: true, default: Date.now }
});

module.exports = mongoose.model('submission', SubmissionSchema);