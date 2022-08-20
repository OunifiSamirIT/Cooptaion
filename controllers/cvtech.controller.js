const CvTeck = require("../models/CVTECK");




const AddCVTCH = async (req, res) => {
  
          await CvTeck.create(req.body);
          res.status(201).json({ message: "CvTech added with success" });
          console.log('hello', req.body)
          
};

const FindAllAddCVTCH = async (req, res) => {
  try {
    const data = await CvTeck.find();
    res.status(201).json(data);
    
  } catch (error) {
    console.log(error.message);
  }
};



module.exports = {
    AddCVTCH,
  FindAllAddCVTCH
  
};
