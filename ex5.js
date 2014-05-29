fs=require("fs");
path=require("path");
fs.readdir(process.argv[2],function callback(err,list){for (i=0;i<list.length;i++){if (path.extname(list[i])==".md"){console.log(list[i])}}})