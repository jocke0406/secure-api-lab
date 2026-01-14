require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", ts: new Date().toISOString() });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on :${port}`));
app.get("/eval", (req, res) => {
  // ⚠️ NE PAS GARDER : uniquement pour test CodeQL
  const x = req.query.x || "2+2";
  // eslint-disable-next-line no-eval
  const y = eval(x);
  res.json({ y });
});
