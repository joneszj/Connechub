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

// list models
var models = [
    'category',
    'subcategory',
    'post',
    'profile'
];
// import models
models.forEach(function (model) {
    module.exports[model] = sequelize.import(__dirname + '/models/' + model);
});
// build relationships
(function (m) {
    m.category.hasMany(m.subcategory);
    m.subcategory.belongsTo(m.category);
    m.post.belongsToMany(m.subcategory, {
        through: 'SubcategoryPost'
    });
    m.subcategory.belongsToMany(m.post, {
        through: 'SubcategoryPost'
    });    
    m.profile.hasMany(m.post);    
})(module.exports);

module.exports = {
    sequelize: sequelize,
    testConnection: testConnection,
    initialize: initialize
};