const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Category = require('./Categories');
const Colour = require('./Colours')
const product = sequelize.define('Products', {
  name:DataTypes.STRING,
  img:DataTypes.STRING,
  size:DataTypes.ARRAY(DataTypes.STRING),
  age:DataTypes.ARRAY(DataTypes.STRING),
  colourId:DataTypes.INTEGER,
  categoriesId:DataTypes.INTEGER,
  price:DataTypes.INTEGER,
  description:DataTypes.STRING
});

product.belongsTo(Category, { foreignKey: 'categoriesId', targetKey: 'id' });
product.belongsTo(Colour, { foreignKey: 'colourId', targetKey: 'id' });

module.exports = product;