const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Simulate an error
    //throw new Error('Something went wrong!');
    //This is the error I was trying to simulate
    const data = someFunctionThatMightThrow();
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  } catch (err) {
    console.error('An error occurred:', err);
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error');
  }
});

function someFunctionThatMightThrow() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
      throw new Error('Random error occurred!');
  }
  return randomNumber;
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});