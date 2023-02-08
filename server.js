const http = require("http");

const PORT = process.env.PORT || 3000;

let server = http.createServer((request, response) => {
   
   console.log("I got your request!");
   
   response.write("Hello from a Node Server!");
   response.end();
});

server.listen(PORT);
