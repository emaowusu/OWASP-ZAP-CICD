const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h2><em>Welcome To OWASP ZAP DAST web app</em></h2>");
});

// Intentional insecure endpoint
app.get("/search", (req, res) => {
  const q = req.query.q;
  res.send("Search term: " + q);
});

app.listen(3000, '0.0.0.0', () => console.log("App running on PORT 3000"));


