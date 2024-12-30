const express = require('express');
const app = express();
const port = 3000;

function myMiddleware(req, res, next) {
  try {
    // Example of potentially problematic middleware - uncommenting this will likely cause an error
    // res.write('Hello');
    // res.end(); //This causes an issue if called multiple times.
    next();
  } catch (error) {
    console.error('Error in middleware:', error);
    res.status(500).send('Internal Server Error');
  }
}

app.use(myMiddleware);

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});