const http = require('http');  
  
  
const hostname = '10.18.22.45';  
const port = 8082;  
  
http.createServer((req, res) => {  
  res.writeHead(200, {"Content-Type": "application/json"});  
  var otherArray = ["item1", "item2"];  
  var otherObject = { item1: "item1val", item2: "item2val" };  
  var json = JSON.stringify({   
    anObject: otherObject,   
    anArray: otherArray,   
  });  
  res.write(json);//！！一定要加配置的回调方法名  
  // res.writeHead(200, { 'Content-Type': 'text/plain' });  
  // res.end(addon.hello());  
  
}).listen(port, hostname, () => {  
  console.log(`Server running at http://${hostname}:${port}`);  
});  