    if (process.env.NODE_ENV !== 'production') {
        require('dotenv').config()
    }
    const express = require("express")
    const mongoose = require('mongoose')
    const app = express()
    const http = require('http').createServer(app);
    const os = require('os');
    const bcrypt = require('bcrypt')
    const passport = require('passport');
    
    const initPass = require('./passport-config');
    const routes = require('./routes')

    const port = 2020
    const uri = process.env.DBURI


    
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(express.static(__dirname + '/views/data'));
    app.set('view engine', 'ejs');
    app.use('/api', routes)
    
    console.log(uri)

    mongoose.connect(uri, {

    }).then(() => {
        console.log('mongoDB connected!')
    }).catch((error) => {
        console.error(error.message);
    })

    app.use(express.urlencoded({ extended: false}))
    app.use(express.json())
    app.get('*.ejs', function(req, res) {
         res.render(__dirname + HTML_path + req.url, function(err, result) {
            if(err) { console.log(err); }
            res.end(result);
        });
    });

    initPass(passport,
        name => users.find(user => user.name === name),
        Uid => users.find(user => user.Uid === Uid)
    );

    //server render

    app.get('/', async(req, res) => {
       res.render('new.ejs', {
       });
    });

    app.get('/login', async(req, res) => {
       res.render('login.ejs', {
       });
    });

    app.get('/register', async(req, res) => {
        res.render('register.ejs', {
        });
    });

    app.listen(port);
    console.log("server is running on port " + port);