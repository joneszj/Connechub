const fake = require('faker');

module.exports = function (app) {
    createCategories(app, createSubCategories(app, associateSubcategoriesToCategories(app)));
    // createProfiles(app);
    // createPosts(app);
    // associatePostsSubcategory(app);
    // associatePostsProfile(app);
}

function createCategories(app ,callback) {
    var bulk = [];
    for (var y = 0; y < app.locals._.random(50, 75); y++) {
        bulk.push({
            name: fake.commerce.department() + '-' + fake.lorem.word() + '-' + fake.lorem.word(),
            description: fake.lorem.paragraph(5)
        });
    }
    app.locals.db.models.Category.bulkCreate(bulk).then(() => callback);   
}
function createSubCategories(app, callback) {
    var bulk = [];
    for (var y = 0; y < 300; y++) {
        bulk.push({
            name: fake.commerce.product(),
            description: fake.lorem.sentence(app.locals._.random(1, 3))
        });
    }
    app.locals.db.models.Subcategory.bulkCreate(bulk).then(() => callback);
}
function associateSubcategoriesToCategories(app) {
    app.locals.db.models.Category.findAll().then((categories) => {
        app.locals.db.models.Subcategory.findAll().then((subcategories) => {
            for (var y = 0; y < subcategories.length; y++) {
                var subcategory = subcategories[y];
                subcategory.setCategory(categories[app.locals._.random(1, categories.length)]);
            }
        });
    })
}

function createProfiles(app) {
    for (var y = 0; y < app.locals._.random(15, 150); y++) {
        app.locals.db.models.Profile.build({
            name: fake.commerce.product(),
            location: fake.commerce.product(),
            description: fake.lorem.sentence(app.locals._.random(5, 20))
        }).save();
        //create addresses
        //create contacts        
    }    
}
function createPosts(app) {
    for (var y = 0; y < app.locals._.random(15, 150); y++) {
        app.locals.db.models.Post.build({
            name: fake.commerce.product(),
            location: fake.commerce.product(),
            description: fake.lorem.sentence(app.locals._.random(5, 20))
        }).save();
        //create votes
        //create impressions
        //create addresses
        //create contacts
    }
}
function associatePostsSubcategory(app) {
    post.addSubcategory(subcategory);
}
function associatePostsProfile(app) {
    post.addProfile(profile);
}