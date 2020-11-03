const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

const apiRouter = require('./router/apiRouter');

app.use('/api', apiRouter);
app.use('/', (req, res) => res.sendFile(path.resolve(__dirname, 'dist/index.html')));

// localhost:3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
