http=require('http');
url=require('url');
moment=require('moment');
server=http.createServer(function(req,res)
{
	a=url.parse(req.url,true);
	thisMoment=new moment(a['query']['iso']);
	if (a['pathname']=="/api/parsetime")
	{
		res.writeHead(200, "OK", {'Content-Type': 'application/json'});
		res.end(JSON.stringify({"hour":parseInt(thisMoment.format('H'),null),"minute":parseInt(thisMoment.format('mm'),null),"second":parseInt(thisMoment.format('ss'),null)}));
	}
	else if(a['pathname']=="/api/unixtime")
	{
		res.end(JSON.stringify({unixtime:thisMoment._d.getTime()}));
	}
});
server.listen(process.argv[2]);

/*
var http = require('http')
var url = require('url')

function parsetime (time) {
return {
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds()
}
}
function unixtime (time) {
return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
var parsedUrl = url.parse(req.url, true)
var time = new Date(parsedUrl.query.iso)
var result

if (/^\/api\/parsetime/.test(req.url))
  result = parsetime(time)
else if (/^\/api\/unixtime/.test(req.url))
  result = unixtime(time)

if (result) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(result))
} else {
  res.writeHead(404)
  res.end()
}
})
server.listen(Number(process.argv[2]))
*/