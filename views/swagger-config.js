const swaggerJSDoc = require ('swagger-jsdoc');

const swaggerOptions = {
    definition : {
        openapi : '3.0.0',
        info : {
            title : 'API de Blagues Carambar',
            version : '1.0.0',
            description : 'Documentation de l\'API de gestion de blagues carambar',
        },
        servers : [
            {
                url : 'http://localhost:3000',
            },
        ],
    },
    apis: ['./views/*.js'],
};

const swaggerSpecs = swaggerJSDoc(swaggerOptions);
module.exports = swaggerSpecs;

/**
 * @swagger
 * /jokes:
 *   post:
 *     summary: Ajouter une nouvelle blague
 *     tags: [Jokes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Joke'
 *     responses:
 *       201:
 *         description: Blague créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       500:
 *         description: Erreur interne du serveur
 */

/**
 * @swagger
 * /jokes:
 *   get:
 *     summary: Récupérer toutes les blagues
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: Une liste de blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 */

/**
 * @swagger
 * /jokes/{id}:
 *   get:
 *     summary: Récupérer une blague spécifique
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la blague à récupérer
 *     responses:
 *       200:
 *         description: Une blague trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Blague non trouvée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Blague non trouvée"
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Une erreur est survenue sur le serveur"
 */

/**
 * @swagger
 * /jokes/random:
 *   get:
 *     summary: Récupérer une blague aléatoire
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       required:
 *         - text
 *       properties:
 *         id:
 *           type: integer
 *           description: L'ID unique de la blague
 *         text:
 *           type: string
 *           description: Le texte de la blague
 *       example:
 *         id: 1
 *         text: "Pourquoi les poules traversent-elles la route ? Pour aller de l'autre côté !"
 */