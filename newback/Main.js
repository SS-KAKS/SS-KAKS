const express  = require('express');
const app = require();
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const MySQLSpace = require('express-mysql-session')(session);
const Router = require('./Router');

app.use(express.static(path.join(__dirname,'build')));
app.use(express.json());


console.log('WORKING?');
//database

const db= mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database:'kaks'
    });
    
    db.connect(function(err){
        if(err){
                console.log('DB Error');
                throw err;
                return false;
        }
    });
    
    const sessionSpace = new MySQLSpace({
        expiration:(1825*86400*1000),
        endConnectionOnClose: false
    },db);
    
    app.use(session({
        key: '4289thgdsdvsfvefvdvxvfsvfdvx754',
        secret:'MAFRwefwdnasvmNFWEFSDVSDMVN',
        space: sessionSpace,
        resave:false,
        saveUninitialized:false,
        cookie:{
            maxAge: (1824*86400*1000),
            httpOnly:false
        }
    }));
    new Router(app,db);
    app.get('/', function(req,res){
        res.sendFile(path.join(__dirname,'build', 'index.html'));
    });
    
    app.listen(3000);
    
    