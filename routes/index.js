const express = require('express');
const siteRouter = require('./site');
const categoryRouter = require('./category');
const coffeeRouter = require('./coffee');
const teaRouter = require('./tea');

function route(app){
    app.use('/tea',teaRouter);
    app.use('/coffee',coffeeRouter);
    app.use('/category',categoryRouter);
    app.use('/', siteRouter);

}

module.exports = route;