const express = require('express');
const session = require('express-session');
const path = require('path');
const pageRouter = require('../components/signup.components');
const app = express();

// for body parser. to collect data that sent from the client.
app.use(express.urlencoded( { extended : false}));


// Serve static files. CSS, Images, JS files ... etc
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
    new Router(app,db);
    app.get('/', function(req,res){
        res.sendFile(path.join(__dirname,'build', 'index.html'));
    });

// session
app.use(session({
    secret:'SS-KAKS',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000 * 30
    }
}));


// Handling errors (send them to the client)
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});


// Setting up the server
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;