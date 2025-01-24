'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Joke extends Model {
    static associate(models) {
      // définir les associations ici
    }
  }
  Joke.init({
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Joke',
  });
  return Joke;
};
