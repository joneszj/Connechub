module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Profile', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(2000)
  });
};