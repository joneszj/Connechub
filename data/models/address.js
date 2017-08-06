module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Address', {
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    address3: DataTypes.STRING,
    address4: DataTypes.STRING,
    locality: DataTypes.STRING,
    region: DataTypes.STRING,
    postcode: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    paranoid: true
  });
};