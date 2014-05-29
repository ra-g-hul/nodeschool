http=require("http");
bl=require("bl");
i=2;
function doit(){
if(i<=4)
{
http.get(process.argv[i],function(response){
response.pipe(bl(function(err,data){
data=data.toString().split('\n');
b='';
for (i=0;i<data.length;i++)
{
b=b+data[i];
}
console.log(b);
}));
i=i+1
doit(process.argv[i]);
});
}
}
doit();
