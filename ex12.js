http=require("http");
fs=require("fs");
http.createServer(function(req,res){
if(req.method=="POST" || true)
{
var body = '';
req.on('data', function (data) {body+=data.toString();});
req.on('end', function (data) { 
body=body.toUpperCase();
res.writeHead(200, "OK", {'Content-Type': 'text/html'});
res.end(body);});
}
else
{
res.end("Not a POST request.");
}
}).listen(process.argv[2]);