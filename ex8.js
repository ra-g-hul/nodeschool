bl=require("bl");
http=require("http");
http.get(process.argv[2],function(response){
response.pipe(bl(function(err,data){
console.log(data.toString().length);
console.log(data.toString());
}));
});