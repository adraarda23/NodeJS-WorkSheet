const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/' && req.method === 'GET') {
    res.write('<h1>Hello! Welcome to the homepage</h1>');
    res.write('<form method="POST" action="/create-user">');
    res.write('<label for="username">Username:</label>');
    res.write('<input type="text" id="username" name="username">');
    res.write('<label for="username2">Username2:</label>');
    res.write('<input type="text" id="username2" name="username2">');
    res.write('<button type="submit">Create</button>');
    res.write('</form>');
    res.end();
  }

  else if (req.url === '/users') {
    res.write('<ul><li>User 1</li></ul>');
    res.end();
  }

  else if (req.url === '/create-user' && req.method === 'POST') {
    const body = [];
    req.on('data', chunk => {
        body.push(chunk);
    });

    req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const users = parsedBody.split('&');
    for(let i of users){
        const user = i.split("=")[1];
        console.log("New user created",user);
    }

    res.writeHead(302, {
    'Location': "/"
      });
      res.end();
    
    });
  }
});

server.listen(3000);
