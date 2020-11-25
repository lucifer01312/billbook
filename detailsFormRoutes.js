var app=require('express').Router();
var detailsForm=require('./detailsForm');
app.get('/',detailsForm.getall);
app.post('/add',detailsForm.add);
app.put('/update',detailsForm.update);
app.delete('/delete',detailsForm.delete);
app.get('/getById',detailsForm.getById);
app.get('/getName',detailsForm.getName);
module.exports=app;