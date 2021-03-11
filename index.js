const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const keys = require("./config/keys");

require("./models/User");
require("./models/Survey");
require("./services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    //how many time it will be saved
    // 30 days * 24h/day * 60min/h * 60s/h * 1000milSeconds/s
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

//express config to essentially work on production
if (process.env.NODE_ENV === "production") {
  //express will serv up production assets
  //like our main.js file or main.css file client/build
  app.use(express.static("client/build"));
  //Express will serve up the index.html file
  //if it doesnt recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
