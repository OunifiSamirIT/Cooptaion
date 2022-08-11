const Candidat = require("../models/candidat.models");
const ValidateUser = require("../validation/Users.validation");
const AddUser = async (req, res) => {
  const { errors, isValid } = ValidateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Candidat.findOne({ Email: req.body.Email }).then(async (exist) => {
        if (exist) {
          errors.Candidat = "User Exist";
          res.status(404).json(errors);
        } else {
          await Candidat.create(req.body);
          res.status(201).json({ message: "User added with success" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const FindAllCandidat = async (req, res) => {
  try {
    const data = await Candidat.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const FindSinglUser = async (req, res) => {
  try {
    const data = await Candidat.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateUser = async (req, res) => {
  const { errors, isValid } = ValidateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Candidat.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const DeleteUser = async (req, res) => {
  try {
    await Candidat.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "User deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddUser,
  FindAllCandidat,
  FindSinglUser,
  UpdateUser,
  DeleteUser,
};
