const http = require('http');
let fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Context-Type' : 'text/html'
  });
  fs.readFile('./public/index.html', null, function(error, data) {
    if(error) {
      res.writeHead(404);
      res.write("File not found")
    } else {
      res.write(data);
    }
    res.end();
  })
})

server.listen(8080, () => {
  console.log("Listening to requests on port 8080")
})








// const http = require('http');
// let fs = require('fs');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-type": "text/html",
//   })
//   res.end("<h1>Hello World from openshift app</h1>")
// })

// server.listen(8080, () => {
//   console.log("Listening to requests on port 8080")
// })