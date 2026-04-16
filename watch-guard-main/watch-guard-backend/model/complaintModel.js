const mongoose = require('../config/database'); 
const Schema  = require('../config/database').Schema;

const complaintSchema = new Schema({
    incidentDetails : {
        type: Object,
        required: true

    },
    incidentLocation : {
        type: Object,
        required: true

    },
    personalInfo : {
        type: Object
    }
} , {timestamps : true});

const complaints = mongoose.model('complaints', complaintSchema);

module.exports = complaints;