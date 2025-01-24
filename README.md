# API de Blagues Carambar

Cette API permet de gérer et de récupérer des blagues Carambar.

## Prérequis

- Node.js
- npm (ou yarn)
- Sequelize et une base de données compatible (SQLite, PostgreSQL, etc.)

## Installation

Pour installer les dépendances, exécutez la commande suivante : "npm install"

## Lancer l'application

Pour lancer l'application en développement :
"node app.js"

Le serveur se lancera sur `http://localhost:3000`.

## Documentation de l'API

La documentation interactive de l'API est disponible via Swagger.

- [API Documentation](http://localhost:3000/api-docs)

## Endpoints principaux

### Ajouter une nouvelle blague

POST/jokes

### Récupérer toutes les blagues

GET /jokes

### Récupérer une blague spécifique

GET /jokes/{id}

### Récupérer une blague aléatoire

GET /jokes/random
