var app=require('express').Router();

var detailsFormRoutes = require('./detailsFormRoutes');


app.use('/detailsForm',detailsFormRoutes)
module.exports=app;