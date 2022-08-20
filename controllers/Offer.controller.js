
const Offer = require("../models/Offer.model");
const jwt = require("jsonwebtoken");
const config = require("../config.json");

const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
var ObjectId = require('mongoose').Types.ObjectId;


/*
todo ::: Update Offer
todo ::: Show ONly the offer that are Open

*/

////* Get All The Created Offers *////
/*
todo add get only the active pen offer
*/
exports.getAllOffers = async (req, res) => {
    // const offers = await Offer.find({});


    try {
        const data = await Offer.find();
        
        res.status(201).json(data);
      } catch (error) {
        console.log(error.message);}


    //.populate("Cv");
    //.populate("chats likes");
    // if (offers) {
    //      /*
    //         todo remove the updods from the image name
    //           let txt = product.image;

    //     console.log(`txtttttt  ${txt}`);

    //     let nextTXT = txt.replace("uploads", "");  
    //     product.image = nextTXT; 
    //         */

       

    //     console.log("Lenghttt");
        
    //     // let arrayLength = offers.length;
    //     // for (var i = 0; i < arrayLength; i++) {
    //     //     console.log(offers[i]);
    //     //     let txt = offers[i].image;
    //     //     let nextTXT = txt.replace("uploads", "");
    //     //     offers[i].image = nextTXT;
    //     //     //Do something
    //     // }
        
    //     res.status(200).send(offers);
    // } else {
    //     res.status(403).send({ message: "fail" });
    // }
};

/* 
todo this is required
? This is A blue comment
! The Red One
* The gree One
& Pink Comments
^ This IS Yellow 
 
*/

////* Create New Offer , Allowed Only to the admin *////
exports.addOffer = async (req, res) => {
    const { title, description, modedemploi, companyDescription, responsabilities, requiredSkills, expYears, closed, } = req.body;

    console.log(req.body.cv)
    const verifOffer = await Offer.findOne({ title });
    if (verifOffer) {
        console.log("Offer With the same title already exists")
        res.status(403).send({ error: "Offer with the same Title already exists ! Please USe An Other Title" });
    } else {
        console.log("Success")
        const newOffer = new Offer();
        newOffer.title = title;
        newOffer.description = description;
        newOffer.modedemploi = modedemploi;
        newOffer.companyDescription = companyDescription;
        newOffer.responsabilities = responsabilities;
        newOffer.requiredSkills = requiredSkills;
        newOffer.expYears = expYears;
        newOffer.closed = closed;
        if (req.file) {

            console.log(req.file.path);
            let txt = req.file.path;
            let nextTXT = txt.replace("uploads", "");
            let last = nextTXT.replace("images", "");
             
            
            newOffer.image = last;
        }
        newOffer.save();
        /*
        Todo Notify all The users that there new Offer Published
        */
        res.status(201).send( newOffer);
    }
}
 
/*
 & Get Offer By Id
*/

exports.getOfferById = async (req , res) =>{
  

        
    /*
    todo  check if the id is OK
    */
    if(ObjectId.isValid( req.params._id)){
        var  offer = await Offer.findById(req.params._id)
    }
    

        if (offer) {
           return  res.status(201).send(offer);
        }
        return res.status(201).send({error: "Somme Errer Has Occured"});
    
       
    

}
/*
& Delete One Offer By ID
*/ 
exports.deleteOne = async (req, res) => {
    console.log(req.body)

    const offer = await Offer.findById(req.body._id).remove()

  return   res.send({ offer });
}
/*
& Delete All the offers
*/ 
exports.deleteAll = async (req, res) => {
    Offer.remove({}, function (err, user) {
        if (err) { return handleError(res, err); }
        return res.status(204).send({ message: "No Offer yet" });
    })
}
