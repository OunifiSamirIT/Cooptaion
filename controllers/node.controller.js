const Node = require("../models/Node.model");
const jwt = require("jsonwebtoken");
const config = require("../config.json");
const bcrypt = require("bcrypt");
var ObjectId = require('mongoose').Types.ObjectId;
/*
todo add node 
^ parent Id
^ node Id
^ level :: !!!! to find 
*/
/*
^ donne   getUsersFrom level X 
^ donne getuserXChildren
^ donne getUserXparent
^ donne getLevelX children 
^ donne getLevelXchildrenCount 
^ donne getAllChildrenCount
^ get All nodes Details :: How to Show them !!!
^ donne getLastLevel
& todo :::: Bloc the recommnadtation option for users from the level 5 
& todo :::: frontEnd ::: update screen
& todo :::: offers , get the person who Recs , all infomration in the getOffer




todo delet level X all children
todo delete all uer X's children
todo delete user from the Node tree !!??? chat happends then !!
todo delete all node !! ??? what happens for the users then 
todo ...............
*/
exports.getAllNodesDetailes = async (req, res) => {
    const nodes = await Node.find();
    // each node have 
    /*
    &node ID
    & parent Email
    & user Email
    & children Emails :: list
    & children cont
    */
    const nodesData = [];
    for (var node of nodes) {
        console.log("..............node", node)
        const children = await Node.find({ "parentEmail": node.userEmail });
        const level = await Node.find({ "userEmail": node.userEmail });
        /*
        todo add the level of each node
        */
        const nodeData = {
            "_id": node._id,
            "userEmail": node.userEmail,
            "parentEmail": node.parentEmail ? node.parentEmail : null,
            "level": node.level,
            "children": children,
        }
        nodesData.push(nodeData);
    }
    return res.status(200).send(nodesData);
}
exports.getLastLevel = async (req, res) => {
    // start from the button 
    //  5 search if it exist  the  4 then 3 then 
    const level5Children = await Node.find({ level: 5 });
    const level4Children = await Node.find({ level: 4 });
    const level3Children = await Node.find({ level: 3 });
    const level2Children = await Node.find({ level: 2 });
    const level1Children = await Node.find({ level: 1 });
    if (level5Children == null || level4Children == null || level3Children == null || level2Children == null || level1Children == null) {
        return res.status(500).send({ "error": "servier side eroor" });
    }
    if (level5Children.length > 0) {
        return res.status(200).send({ "message": "success", "level": 5 });
    } else if (level4Children.length > 0) {
        return res.status(200).send({ "message": "success", "level": 4 });
    } else if (level3Children.length > 0) {
        return res.status(200).send({ "messgae": "success", "level": 3 });
    } else if (level2Children.length > 0) {
        return res.status(200).send({ "message": "success", "level": 2 });
    } else if (level1Children.length > 0) {
        return res.status(200).send({ "message": "success", "level": 1 });
    } else return res.status(200).send({ "message": "success", "level": 0 })
}
exports.getAllNodesCount = async (req, res) => {
    const nodes = await Node.find();
    if (nodes == null) {
        return res.status(500).send({ "error": "Somme server side erros has occured" });
    }
    const count = nodes.length;
    return res.status(200).send({ "message": "success", "count": count });
}
exports.getLevelXChildrenCount = async (req, res) => {
    const level = parseInt(req.body.level);
    console.log("level", level);
    if (level == null) {
        return res.status(403).send({ "error": "Please choose a level" });
    } else if (isNaN(level)) {
        return res.status(403).send({ "error": "Rong Level" });
    }
    else if (level > 5) {
        return res.status(403).send({ "error": "Rong level , max level is 5" });
    } else {
        const children = await Node.find({ "level": level });
        const count = children.length;
        console.log("Counntt:", count);
        return res.status(200).send({ "message": "success", "count": count });
    }
}
exports.getLevelXChildren = async (req, res) => {
    const level = parseInt(req.body.level);
    console.log("::::::::::::::::::", level)
    console.log("NAB::::", isNaN(level))
    if (level == null) {
        console.log("level", level)
        return res.status(403).send({ "error": "please chooose a level" });
    } else if (isNaN(level)) {
        return res.status(403).send({ "error": "Rong Level" });
    }
    else if (level > 5) {
        return res.status(403).send({ "error": "Rong level , max level is 5" });
    } else {
        const children = await Node.find({ "level": level });
        return res.status(200).send({ "message": "succees", "children": children });
    }
}
exports.getUserXparents = async (req, res) => {
    const userEmail = req.body.email;
    if (!userEmail) {
        return res.status(403).send({ "error": "please provide an email" })
    }
    const node = await Node.find({ userEmail: userEmail });
    if (!node || node.length == 0) {
        console.log("noooo nodde");
        return res.status(403).send({ "error": "this user isn't in any node yet" });
    } else {
        console.log("noooode", node);
        const parentEmail = node[0].parentEmail;
        if (!parentEmail) {
            return res.status(200).send({ "message": "reacines" });
        } else {
            return res.status(200).send({ "parent": parentEmail });
        }
    }
}
exports.getUserXChildren = async (req, res) => {
    const userEmail = req.body.email;
    console.log(userEmail);
    if (!userEmail) {
        return res.status(403).send({ "error": "please provide an email" })
    }
    const nodes = await Node.find({ parentEmail: userEmail });
    console.log(nodes);
    return res.status(200).send({ "nodes": nodes });
}
exports.getUsersFromLEvel = async (req, res) => {
    const level = req.body.level;
    if (!level) {
        return res.status(403).send({ "message": "Please Provide a level" })
    }
    if (level > 5) {
        return res.status(403).send({ "message": "Max is Level is 5" });
    }
    console.log("................", level, ",,,,,,,,,,,,,,,,,,,,,,,,,,,,")
    const users = await Node.find({ level: level });
    console.log(users);
    return res.status(200).send(users);
}
exports.createNode = async (params) => {
    /*
    todo  check if the id is OK
    */
    const { parentEmail, email, } = params;
    //return the level of the parent  Node
    const parentLevel = await getLevel(parentEmail);
    var level;
    // level = parentLevel +1;
    if (parentLevel <= 4) {
        level = parentLevel + 1;
        var node = await new Node({ userEmail: email, parentEmail: parentEmail, level: level }).save();
        console.log(".......................");
        console.log(node);
        console.log("8888888888888888888888888888888888888888");
        node.save();
        return node;
    } else {
        // error indicates that the end level is reached -- not allowed to add 
        return "error";
    }
}
getLevel = async (parentEmail) => {
    const node = await Node.find({ userEmail: parentEmail }).exec();
    return node[0].level;
}
exports.getAllNodes = async (req, res) => {
    const nodes = await Node.find({});
    res.status(200).send(nodes);
}
// more securethis Function 
exports.deleteAllNodes = async (req, res) => {
    // secure this function
    Node.remove({}, function (err, user) {
        if (err) { return handleError(res, err); }
        return res.status(201).send({ message: "Toutes les nodes ont été supprimées avec succès" });
    })
}
