const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Uncommon error: Unexpected token error when using a non-standard middleware
//This would happen if you have a middleware which is not standard compliant