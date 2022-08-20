const Recommandation = require("../models/Recommandation.model");
const User = require("../models/User.model");
const Offer = require("../models/Offer.model");
const jwt = require("jsonwebtoken");
var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require("mongoose");
const config = require("../config.json");

const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");



/* 

todo ::: Get All Recommandation
todo :::  Get Recommandation By Offer

ToDo ::: Create New Recommandation For An Offer
ToDo :::  Create New Recommandation For No Specefic Offer

*/

/* 
& Get All The  Recommandation 
*/


exports.createRec = async (req, res) => {
    const { userEmail, invitedEmail, invitedName, invitedLastName, linkedInUrl, phoneNumber, offer_Id } = req.body;

    /*
    ^ isEmailRecForThisOffer test of the provided email is already invited for this offer , 
    ^if Yes your can can not Recommand it
    */
    const isEmailRecForThisOffer = await Recommandation.find({ invitedEmail: invitedEmail });
    const verifUser = await User.find({ email: userEmail });
    // invited User DONE !
    if (verifUser.length == 0) {
        console.log("Your are not allowed To make Invitaion");
        return res.status(201).send({ message: "error", message: "Yo are Not Allowed To Invit Users", });
    }
   
    if (offer_Id) {
        if(ObjectId.isValid(offer_Id)){
            const isOfferExists = await Offer.find({ _id: offer_Id });
           
            var id = mongoose.Types.ObjectId(offer_Id);
            if (isEmailRecForThisOffer.length == 0 && verifUser.length > 0) {
                //// ***  Create Your Recommandation****///
                // $$NotAlreadyInvitrf
                // do your code here
                // create random code
                const rec = new Recommandation({ invitedEmail: invitedEmail,userEmail: userEmail, invitedName: invitedEmail, invitedLastName: invitedLastName, linkedInUrl: linkedInUrl, phoneNumber: phoneNumber, offer_Id: id });
                let offer = await Offer.findOneAndUpdate(
                    { _id: offer_Id },
                    { $push: { recommandations: rec._id } },
                );
                rec.save();
                return res.status(201).send(rec);
            }
            if (isEmailRecForThisOffer.length > 0) {
                console.log("User Already Recomannded");
                return res.status(201).send({ message: "error", message: "The user Is Already Recommanded For This Offer ", });
            }

        } else {
            console.log("Offer Id IS Not Valide");
            return res.status(201).send({ message: "error", message: "The Offer Id Is Not Valide ", });
        }
       
    } else {
        const isOfferExists = await Offer.find({ _id: offer_Id });
        if (isEmailRecForThisOffer.length == 0 && verifUser.length > 0) {
            //// ***  Create Your Recommandation****///
            // $$NotAlreadyInvitrf
            // do your code here
            // create random code
            const rec = new Recommandation({ invitedEmail: invitedEmail, invitedName: invitedEmail, invitedLastName: invitedLastName, linkedInUrl: linkedInUrl, phoneNumber: phoneNumber })
            rec.save();
            return res.status(201).send(rec);
        }


    }
    console.log("Else Is Reached")
    return res.status(403).send({ message: "Somme Error has occuredS" });

}


exports.getAllRec = async (req, res) => {
    const recs = await Recommandation.find({});
    if (recs) {
        res.status(200).send(recs);
    } else {
        res.status(403).send({ message: "Could Not Load Recommandation" });
    }
};


exports.getrecById = async (req , res) =>{
  
    try {
        const data = await Recommandation.findById({ _id: req.params.id });
        res.status(201).json(data.userEmail);
console.log("hello")
      } catch (error) {
        console.log(error.message);
      }
    
    
    
    
    
    
       

}