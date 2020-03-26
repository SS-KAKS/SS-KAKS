const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routing = require("./routing");
const users = require("./routes/api/users");
const cors = require("cors");
let path = require('path');
const app = express();
app.use(cors());
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err+ "Unable to connect to mongo"));
// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use('/tables', routing);
//serve static assets if in production
if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('../../build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../../','build', 'index.html'));
  });

}
const port = process.env.PORT || 5080;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
