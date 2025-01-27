require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();

const PORT = process.env.PORT || 3000;

// Connexion à la base de données
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'sqlite',
    storage: "./database.sqlite",
    logging: false,
});

// Middleware JSON
app.use(express.json());

// Middleware CORS
app.use(cors());

// Routes de l'API
const jokesRoutes = require('./routes/jokes');
app.use('/jokes', jokesRoutes);

// Documentation Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./views/swagger-config');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Synchroniser les modèles Sequelize et lancer le serveur
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Serveur lancé sur http://localhost:${PORT}`);
        console.log(`Documentation Swagger : http://localhost:${PORT}/api-docs`);
    });
});