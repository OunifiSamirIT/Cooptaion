const mongoose = require("mongoose");

const CvTeckSchema = new mongoose.Schema(
        {                    
                TitreProfile: { type: String },
                PosteActuel: { type: String },
                Formation: { type: String },
                Experience: { type: String },
                Secteur: { type: String },
                Specialiter: { type: String },
               
                         
        },
        {
                timestamps: { currentTime: () => Date.now() },
        }
);

module.exports = mongoose.model('CvTeck', CvTeckSchema);