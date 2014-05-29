m=require("./mymodule.js");
m(process.argv[2],process.argv[3],function callback(err,data){
if(err)
{
console.log(err)
}
else
{
for (var x in data)
console.log(data[x]);
}
});
