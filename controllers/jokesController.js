const { Joke } = require('../models');

exports.createJoke = async (req, res) => {
    try {
        const joke = await Joke.create({ text: req.body.text });
        res.status(201).json(joke);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllJokes = async (req, res) => {
    try {
        const jokes = await Joke.findAll();
        res.json(jokes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findJokes = async (req, res) => {
    try {
        const joke = await Joke.findByPk(req.params.id);
        if (joke) {
            res.json(joke);
        } else {
            res.status(404).json({ error: 'Blague non trouvée' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.randomJokes = async (req, res) => {
    try {
        const count = await Joke.count();
        const randomIndex = Math.floor(Math.random() * count);
        const joke = await Joke.findOne({ offset: randomIndex });
        res.json(joke);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};