var bodyParser=require('body-parser');
var mongoose=require('mongoose');
mongoose.connect('mongodb://admin:admin@ds117251.mlab.com:17251/tododo');

var todoSchema=new mongoose.Schema({
  item:String
});

var Todo=mongoose.model('Todo',todoSchema);



//var data=[{item:'learn node'},{item:'work out'},{item:'quora'},{item:'read novel'}];
var urlencodedParser=bodyParser.urlencoded({extended:false});

module.exports=function(app){

  app.get('/todo',function(req,res){
    Todo.find({},function(err,data){
      if(err) throw wrr;
      res.render('todo',{todos:data});
    });
  });

  app.post('/todo',urlencodedParser,function(req,res){
  var newTodo=Todo(req.body).save(function(err,data){
    if(err) throw err;
    res.json(data);
  });
  });

  app.delete('/todo/:item',function(req,res){
    Todo.find({item:req.params.item.trim().replace(/\-/g," ")}).remove(function(err,data){
      if(err) throw err;
      res.json(data);
    });
  });
}
