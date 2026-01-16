require("dotenv").config();
const express = require("express");
const { logRequest } = require("./src/utils/logger");
const { login } = require("./src/auth/auth.controller");
const { authRequired } = require("./src/auth/auth.middleware");
const { requireRole } = require("./src/auth/auth.rbac");

const app = express();
app.use(express.json());

app.use(logRequest);

app.get("/health", (req, res) => {
  res.json({ status: "ok", ts: new Date().toISOString() });
});

app.post("/auth/login", login);

app.get("/me", authRequired, (req, res) => {
  res.json({ user: req.user });
});

app.get("/admin", authRequired, requireRole("admin"), (req, res) => {
  res.json({ ok: true, message: "welcome admin" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on :${port}`));
