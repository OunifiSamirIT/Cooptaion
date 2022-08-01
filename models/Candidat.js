const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CandidatSchema = new Schema({
    Post: String,
    Session : String,
    Contrat: String,
    Codeinvitation: String
}, {timestamps: true})




module.exports = mongoose.model('Candidat', CandidatSchema)
