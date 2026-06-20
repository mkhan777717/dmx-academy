const http = require('http');

const body = JSON.stringify({
  title: "Test Contest " + Date.now(),
  description: "This is a test contest description.",
  category: "Algorithms & Frontend",
  startTime: new Date().toISOString(),
  endTime: new Date(Date.now() + 3600000).toISOString() // 1 hour later
});

const req = http.request({
  hostname: '127.0.0.1',
  port: 5001,
  path: '/api/contests',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-bypass-auth': 'true',
    'x-bypass-role': 'ADMIN',
    'Content-Length': Buffer.byteLength(body)
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log("STATUS:", res.statusCode);
    console.log("RESPONSE:", JSON.parse(data));
  });
});

req.on('error', (e) => {
  console.error("ERROR:", e);
});

req.write(body);
req.end();
