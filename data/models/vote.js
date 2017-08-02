module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Vote', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(2000)
  });
};
