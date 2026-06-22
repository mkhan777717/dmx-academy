const http = require('http');

const body = JSON.stringify({
  title: "Test Problem " + Date.now(),
  difficulty: "MEDIUM",
  statement: "This is a test problem statement of at least ten characters.",
  inputFormat: "Standard input format",
  outputFormat: "Standard output format",
  constraints: "Constraints description",
  explanation: "Explanation description",
  testCases: [
    {
      input: "test input",
      expectedOutput: "test output",
      isSample: true
    }
  ]
});

const req = http.request({
  hostname: '127.0.0.1',
  port: 5001,
  path: '/api/problems',
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
