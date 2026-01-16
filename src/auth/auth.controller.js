const jwt = require("jsonwebtoken");
const { findByEmail } = require("../users/users.mock");

function login(req, res) {
  const { email, password } = req.body || {};
  if (!email || !password)
    return res.status(400).json({ error: "email and password required" });

  const user = findByEmail(email);
  if (!user || user.password !== password) {
    // Message neutre: évite l'énumération (ne pas dire "email existe")
    return res.status(401).json({ error: "invalid credentials" });
  }

  const payload = {
    sub: user.id, // subject = identifiant stable
    role: user.role, // pour RBAC
    email: user.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "15m",
    issuer: "secure-api-lab",
    audience: "secure-api-lab-clients",
  });

  return res.json({
    access_token: token,
    token_type: "Bearer",
    expires_in: process.env.JWT_EXPIRES_IN || "15m",
  });
}

module.exports = { login };
