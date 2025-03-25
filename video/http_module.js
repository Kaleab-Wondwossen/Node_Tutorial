// we will use Express for the sake of abstraction 
const http = require('http');

// Define the server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to our home page');
    res.end('Welcome to our home page');
  } else if (req.url === '/about') {
    res.write('Welcome to our short history');
    res.end('Here is our short history');
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">Back Home</a>
    `);
  }
});

// Start the server
server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
