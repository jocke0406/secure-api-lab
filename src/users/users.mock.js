// ⚠️ Labo: utilisateurs mockés. En prod: DB + mot de passe hashé.
const users = [
  { id: "u1", email: "user@demo.local", password: "userpass", role: "user" },
  { id: "a1", email: "admin@demo.local", password: "adminpass", role: "admin" },
];

function findByEmail(email) {
  return users.find((u) => u.email === email);
}

module.exports = { findByEmail };
