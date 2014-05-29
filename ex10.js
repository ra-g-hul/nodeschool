var net=require("net");
var date=new Date();
function two(x)
{
	if (x<10)
	{
		return '0'+x.toString()
	}
	return x
}
var server=net.createServer(function(socket){
socket.end(date.getFullYear().toString()+"-"+two(date.getMonth()+1)+"-"+two(date.getDate())+" "+two(date.getHours())+":"+two(date.getMinutes())+"\n")
});
server.listen(process.argv[2]);
/*
 var http = require('http')
 var fs = require('fs')

 var server = http.createServer(function (req, res) {
   res.writeHead(200, { 'content-type': 'text/plain' })

   fs.createReadStream(process.argv[3]).pipe(res)
 })

 server.listen(Number(process.argv[2]))
 */