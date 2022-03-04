const express = require('express');

class SiteController {
    home(req,res,next){
        res.render('home');
    }
    login(req,res,next){
        res.render('login');
    }
}

module.exports = new SiteController();