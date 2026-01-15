# Secure API Lab

API Node.js (Express) utilisée comme **laboratoire Dev / DevSecOps** :

- conteneurisée avec Docker
- déployée sur Azure Container Apps
- sécurisée progressivement (CI, dépendances, auth, secrets, etc.)

Ce repo sert de **support d’apprentissage structuré**.

---

## Prérequis

### Local

- Node.js ≥ 18
- Docker + Docker Compose (v2 recommandé)

### Cloud

- Compte Azure
- Azure CLI (`az`)

---

## Lancer l’API en local (sans Docker)

```bash
npm install
cp .env.example .env
npm run dev
```
