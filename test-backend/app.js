const express = require('express');
const handleAllowedCors = require('./middleware/handleAllowedCors');

const app = express();

app.use(handleAllowedCors);

app.get('/test-api/hello', (req, res) => {
  res.send({ answer: 'Hello, world!' });
});

async function start() {
  try {
    app.listen(3000, () => {
      console.log(`App has been started port 3000`);
    });
  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}

start();
