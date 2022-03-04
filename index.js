const express = require('express');
const{ engine } =require('express-handlebars');
const path = require('path');
const route = require('./routes/index');
const app = express();
const Database = require('./config/db/index');

app.engine('hbs', engine({
    extname:"hbs",
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());
app.use(express.static('public'));

Database.connect();

route(app);

app.listen(3000);