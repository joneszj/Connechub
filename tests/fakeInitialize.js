module.exports = function (app) {
    const fake = require('faker');
    for (var y = 0; y < app.locals._.random(5, 20); y++) {
        console.info('creating category');
        app.locals.db.models.Category.build({
            name: fake.commerce.department(),
            description: fake.lorem.paragraph(5)
        }).save().then(function (category) {
            for (var y = 0; y < app.locals._.random(5, 15); y++) {
                console.info('creating subcategory');
                app.locals.db.models.Subcategory.build({
                    name: fake.commerce.product(),
                    description: fake.lorem.sentence(app.locals._.random(5, 20))
                }).save().then(function (subcategory) {
                    console.info('associating subcategory to category');
                    subcategory.setCategory(category).then(function (subcategory) {
                        for (var y = 0; y < app.locals._.random(15, 150); y++) {
                            console.info('creating post');
                            app.locals.db.models.Post.build({
                                name: fake.commerce.product(),
                                location: fake.commerce.product(),
                                description: fake.lorem.sentence(app.locals._.random(5, 20))
                            }).save().then(function (post) {
                                console.info('associating post to subcategory');
                                post.addSubcategory(subcategory);
                            })
                        }
                    });
                });
            }
        });
    }
}