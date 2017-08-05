var Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://' +
    (process.env.dbUser) + ':' +
    (process.env.dbPassword) + '@' +
    (process.env.dbServer) + ':' +
    (process.env.dbPort) +
    (process.env.dbSchema), {
        pool: {
            max: 50,
            min: 0,
            idle: 200000,
            acquire: 200000
        },
        dialectOptions: {
            timeout: 1000000
        }
    });

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
    //categories & subcategories
    m.category.hasMany(m.subcategory);
    m.subcategory.belongsTo(m.category);
    m.subcategory.hasMany(m.post);
    //profiles
    m.profile.hasMany(m.post);
    m.profile.hasOne(m.address);
    m.profile.hasOne(m.contact);
    //posts
    m.post.hasOne(m.address);
    m.post.hasOne(m.contact);
    m.post.hasMany(m.vote);
    m.post.hasMany(m.impression);
    m.post.belongsTo(m.subcategory);
})(module.exports);

module.exports = {
    sequelize: sequelize,
    testConnection: testConnection,
    initialize: initialize
};