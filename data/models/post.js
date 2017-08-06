module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Post', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(2000),
    price: DataTypes.STRING,
  }, {
    paranoid: true
  });
};

    // t.string   "pin_image_file_name"
    // t.string   "pin_image_content_type"
    // t.integer  "pin_image_file_size"
    // t.datetime "pin_image_updated_at"

    // t.string   "city"
    // t.string   "state"
    // t.string   "zipcode"
    // t.string   "address1"
    // t.string   "address2"
    // t.float    "latitude"
    // t.float    "longitude"    
    
    // t.datetime "created_at"
    // t.datetime "updated_at"
    
    // t.integer  "category_id"
    // t.integer  "subcategory_id"
    
    // t.string   "ademail"
    // t.integer  "user_id"

