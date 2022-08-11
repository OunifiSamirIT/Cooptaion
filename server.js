const express = require("express");
const app = express();

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const config = require("./config.json");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//we want to be informed whether mongoose has connected to the db or not 
mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => {
            console.log("Connecté a la base de données");

        },
        (err) => {
            console.log("Connexion a la base de données echouée", err);
        }
    );

const userRoute = require("./routes/user.route.js");
const invitRoute = require("./routes/invit.route.js");
const offerRoute = require("./routes/offer.route");
const recRoute = require("./routes/recommandation.route");



// make 
app.use(express.static(path.join(__dirname, 'uploads')))


app.use("/api/user", userRoute);
app.use("/api/invit", invitRoute);
app.use("/api/offer/",offerRoute);
app.use("/api/rec/",recRoute);

if (process.env.NODE_ENV === "production") {
    console.log("app in production mode");
    app.use(express.static("client/build"));
    app.get("/*", function (req, res) {
        res.sendFile(
            path.join(__dir, "client", "build", "index.html"),
            function (err) {
                if (err) res.status(500).send(err);
            }
        );
    });
}

app.listen(port, () => console.log(`Server up and running on port ${port} !`));