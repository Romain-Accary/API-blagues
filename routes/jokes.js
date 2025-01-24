//importations des modules
const express = require('express');
const jokesController = require('../controllers/jokesController');
const router = express.Router();

router.use(express.json());


// Route pour ajouter une blague
router.post('/', jokesController.createJoke);


// Route pour récupérer toutes les blagues
router.get('/', jokesController.getAllJokes);


// Route pour récupérer une blague aléatoire
router.get('/random', jokesController.randomJokes);


// Route pour récupérer une blague spécifique
router.get('/:id', jokesController.findJokes);


module.exports = router;