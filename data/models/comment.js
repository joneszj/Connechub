module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Comment', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(2000)
  });
};
