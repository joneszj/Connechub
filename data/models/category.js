module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(2000)
  }, {
      indexes: [{
        unique: true,
        fields: ['name']
      }]
    });
};