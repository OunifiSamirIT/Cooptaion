const Candidat = require("../models/Candidat");
const AddCandidat = async (req, res) => {

    await Candidat.findOne({ Codeinvitation: req.body.Codeinvitation }).then(async (exist) => {
        if (exist) {
            console.log("cccccc");


            res.status(404);
        } else {
            await Candidat.create(req.body);
            res.status(201).json({ message: "User added with success" });
        }
    });




};



module.exports = {
    AddCandidat

};
