var data=[{item:'learn node'},{item:'work out'},{item:'quora'},{item:'read novel'}];

var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false});
module.exports=function(app){

  app.get('/todo',function(req,res){
  res.render('todo',{todos:data});
  });

  app.post('/todo',urlencodedParser,function(req,res){
    data.push(req.body);
    res.JSON(data);
  });

  app.delete('/todo/:item',function(req,res){
    data=data.filter(function(todo){
      return todo.item.replace(/ /g,'-') !==req.params.item;
    })
  });
};
