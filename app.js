//import des modules express, routes, sequelize et swagger
const express = require('express');
const jokesRoutes = require('./routes/jokes');
const db = require('./models');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./views/swagger-config');
const app = express();
app.use(express.json()); 

// Utiliser les routes pour les blagues
app.use('/jokes', jokesRoutes);

//Documentations swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Lancer le serveur
const PORT = 3000;
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Serveur lancé sur http://localhost:${PORT}`);
        console.log(`Documentation Swagger : http://localhost:${PORT}/api-docs`);
    });
});