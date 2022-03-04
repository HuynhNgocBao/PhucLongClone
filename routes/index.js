const express = require('express');
const siteRouter = require('./site');
const categoryRouter = require('./category');

function route(app){
    app.use('/', siteRouter);
    app.use('/category',categoryRouter);
}

module.exports = route;