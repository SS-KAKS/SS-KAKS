const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const routing = require('./routing');
const cors = require('cors');
const app = express();
var ip = require("ip");

app.use(bodyParser.json());

app.use(cors({
}))

app.use('/tables', routing);

// Use env port or default
const port =   5000;
app.listen(port, () => console.log(`Server now running on port ${port}!`));
