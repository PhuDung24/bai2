var express = require('express');
const bodyParser = require('body-parser');
var userRoute = require('./routes/user.routes');


var app = express();
var port = 3000;
app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/',function(req,res){
	res.render('index',{
		name: 'Dung'
	});
});
app.use('/users',userRoute);

app.listen(port,function(){
	console.log('Server listening on port' + port);
});
