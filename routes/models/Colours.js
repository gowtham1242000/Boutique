const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const colour = sequelize.define('Colour', {
  name:DataTypes.STRING,
  hexCode:DataTypes.STRING,
  image:DataTypes.STRING
});


module.exports = colour;