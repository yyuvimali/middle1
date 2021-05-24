const express = require('express');
const bodyParser=require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/addproduct',function(req, res, next){
  res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">add</button></form>');
});
app.use('/product',function(req, res, next){
    console.log(req.body);
    res.redirect('/')
});
  
app.use('/',function(req, res, next){
  res.send('<h1>Hello from Express!</h1>');
});
app.listen(4000);
