const express = require("express");

const PORT = 8080;
const app = express();

app.use(express.json());

// !TODO: mount routes

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
