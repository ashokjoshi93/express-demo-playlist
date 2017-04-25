var express=require('express');
var todoController=require('./controllers/todoController.js');
var app=express();

app.set('view engine','ejs');

app.use(express.static('./public'));

todoController(app);

app.listen(4321);
console.log('You are listening to port 4321.');
