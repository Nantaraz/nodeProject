// var http = require('http');
// var fs = require('fs');
// var smiley = fs.readFileSync('/assets/Miary.jpeg');
  
// http.createServer(function(request, response) {
//   if(request.url.indexOf('smiley.gif')<0) {
//       response.writeHead(200, {"Content-Type": "text/html"});
//       response.write('voici une image : <br/> <img src="/assets/Miary.jpeg" alt="Smiley face" height="42" width="42">  ');
//       response.end();
//   }
//   else
//   {
//      response.writeHead(200, {"Content-Type": "image/jpeg"});
//      response.write(smiley);
//      response.end();
//   }
// }).listen(8080);