const express = require("express");
const router = express.Router();
const NodeController = require("../controllers/node.controller");
 
const path = require("path");


 
 


router.get("/", NodeController.getAllNodes);
router.post("/getUsersFromLevelX" , NodeController.getUsersFromLEvel);
router.post("/getUserXChildren" , NodeController.getUserXChildren);
router.post("/getUserXparents" , NodeController.getUserXparents);
router.post("/getLevelXChildren" , NodeController.getLevelXChildren);
router.post("/getLevelXChildrenCount" , NodeController.getLevelXChildrenCount);
router.get("/getAllNodesCount" , NodeController.getAllNodesCount);
router.get("/getLastLevel" , NodeController.getLastLevel);
router.get("/getAllNodesData" , NodeController.getAllNodesDetailes);
/*
router.get("/:_id", OfferController.getOfferById);
router.post("/addOffer", upload.single("image"), OfferController.addOffer);

router.post("/update", OfferController.updateOfferById );
 


router.delete("/deleteOne", OfferController.deleteOne);

router.delete("/deleteAll", OfferController.deleteAll);
*/

module.exports = router;
