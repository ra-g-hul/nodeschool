fs=require("fs");
p=require("path");
module.exports=function(path,extn,callback){
fs.readdir(path,function(err,list){
if(err)
{
return callback(err);
}
else{
var data=[];
for (var x in list)
{
if (p.extname(list[x])==="."+extn)
{
data.push(list[x]);
}
}
return callback(null,data);
}
});
};