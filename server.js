var express 	= require('express');
var bodyParser 	= require('body-parser');
var app 		= express();
var port 		= process.env.PORT || 3000 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) { // This method controls accept a request or not.
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.get('/',(req,res)=>{

	res.json({ipv4: req.headers["x-forwarded-for"]});

});


app.listen(port, () => { console.log("App startred to listen port = " + port );});

