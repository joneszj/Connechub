module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Contact', {
    email: DataTypes.STRING,
    phone: DataTypes.STRING(2000),
    text: DataTypes.BOOLEAN
  });
};