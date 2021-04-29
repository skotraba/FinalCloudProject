const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-type": "text/html",
  })
  res.end("<h1>Hello World from openshift app</h1>")
})

server.listen(8080, () => {
  console.log("Listening to requests on port 8080")
})