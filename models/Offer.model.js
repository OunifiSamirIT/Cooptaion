const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema(
        {          
                title: {type: String},
                description : {type: String},
                // fulltime part time
                modedemploi:  {type: String},
                companyDescription: {type: String},
                responsabilities: {type : String},
                requiredSkills : [{type: String}],
                expYears: {type: String},
                closed: {type: Boolean},
                image: {type : String},
                // list des ID des recommandations
                recommandations: [{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "recommandation",
                    
                }],
                //    
        },
        {
                timestamps: { currentTime: () => Date.now() },
        }
);

module.exports = mongoose.model('Offer', OfferSchema);
