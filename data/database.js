var Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://' +
    (process.env.dbUser || 'connechub') + ':' +
    (process.env.dbPassword || 'connechub') + '@' +
    (process.env.dbServer || 'localhost') + ':' +
    (process.env.dbPort || '3306') +
    (process.env.dbSchema || '/connechub'));

function testConnection() {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
            process.exit(1);
        });
}

function initialize(app) {
    if (!process.env.NODE_ENV) {
        sequelize.sync({ force: true }).then(() => {
            require('../tests/fakeInitialize')(app);
        });
    }
}

// define models
var models = [
    'address',
    'category',
    'comment',
    'contact',
    'impression',
    'post',
    'profile',
    'subcategory',
    'vote'
];

// import models
models.forEach(function (model) {
    module.exports[model] = sequelize.import(__dirname + '/models/' + model);
});

// build relationships
(function (m) {
    //categories
    m.category.hasMany(m.subcategory);
    m.subcategory.belongsTo(m.category);
    m.post.belongsToMany(m.subcategory, {
        through: 'SubcategoryPost'
    });
    m.subcategory.belongsToMany(m.post, {
        through: 'SubcategoryPost'
    });
    //profiles
    m.profile.hasMany(m.post);
    m.profile.hasOne(m.address);
    m.profile.hasOne(m.contact);
    //posts
    m.post.hasOne(m.address);
    m.post.hasOne(m.contact);
    m.post.hasMany(m.vote);
    m.post.hasMany(m.impression);
})(module.exports);

module.exports = {
    sequelize: sequelize,
    testConnection: testConnection,
    initialize: initialize
};