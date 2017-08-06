module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Category', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
      indexes: [{
        unique: true,
        fields: ['name']
      }],
      paranoid: true
    });
};