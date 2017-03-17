var express 	= require('express');
var bodyParser 	= require('body-parser');
var app 		= express();
var port 		= process.env.PORT || 3000 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res)=>{

	res.json({ipv4: req.headers["x-forwarded-for"]});

});


app.listen(port, () => { console.log("App startred to listen port = " + port );});

