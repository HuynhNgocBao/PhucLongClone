const express = require('express');
const User = require('../models/User');

class SiteController {
    home(req,res,next){
        res.render('home');
    }
    login(req,res,next){
        res.render('login');
    }
    signup(req,res,next){
        res.render('signup');
    }
    save(req,res,next){
        const user = new User(req.body);
        user.save()
        .then(()=>{
            res.redirect('/login');
        })
    }
}

module.exports = new SiteController();