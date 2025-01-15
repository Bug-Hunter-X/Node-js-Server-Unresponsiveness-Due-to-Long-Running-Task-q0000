const http = require('http');

const server = http.createServer(async (req, res) => {
  try {
    // Simulate a long-running task using async/await
    const result = await longRunningTask();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello World! Result: ${result}`);
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

async function longRunningTask() {
  return new Promise((resolve) => {
    let i = 0;
    setTimeout(() => {
      while (i < 1000000000) {
        i++;
      }
      resolve('Task Completed');
    }, 0); 
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});