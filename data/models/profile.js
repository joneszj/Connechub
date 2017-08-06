module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Profile', {
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    bio: DataTypes.TEXT,
    oauthid: DataTypes.STRING,
    access_token: DataTypes.STRING,
    avatarPath: DataTypes.STRING
  }, {
    paranoid: true
  });
};


    // t.string   "email",                  default: "", null: false
    // t.string   "bio"
    // t.string   "username"
    // t.datetime "created_at",                          null: false
    // t.datetime "updated_at",                          null: false

//what is this? the fbi??
    // t.string   "encrypted_password",     default: "", null: false
    // t.string   "reset_password_token"
    // t.datetime "reset_password_sent_at"
    // t.datetime "remember_created_at"
    // t.integer  "sign_in_count",          default: 0,  null: false
    // t.datetime "current_sign_in_at"
    // t.datetime "last_sign_in_at"
    // t.string   "current_sign_in_ip"
    // t.string   "last_sign_in_ip"
  
    // t.string   "avatar_file_name"
    // t.string   "avatar_content_type"
    // t.integer  "avatar_file_size"
    // t.datetime "avatar_updated_at"