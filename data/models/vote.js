module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Vote', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(2000)
  }, {
    paranoid: true
  });
};

/*
    t.integer  "votable_id"
    t.string   "votable_type"
    t.integer  "voter_id"
    t.string   "voter_type"
    t.boolean  "vote_flag"
    t.string   "vote_scope"
    t.integer  "vote_weight"
    t.datetime "created_at"
    t.datetime "updated_at"
  */