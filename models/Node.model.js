const mongoose = require("mongoose");

const NodeSchema = new mongoose.Schema(
        {         

                
                // userId
                userEmail: {type: String},
                parentEmail : {type : String},            
                level : {type: Number},
                
                /*
                todo add the Tickets
                */
    
        },
        {
                timestamps: { currentTime: () => Date.now() },
        }
);

module.exports = mongoose.model('Node', NodeSchema);