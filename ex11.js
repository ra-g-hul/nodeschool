var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
fileStream=fs.createReadStream(process.argv[3]);
fileStream.pipe(res);
}).listen(process.argv[2]);