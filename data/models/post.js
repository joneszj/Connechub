module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Post', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING(2000)
  });
};