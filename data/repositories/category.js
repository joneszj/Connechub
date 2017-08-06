function getPostCategories(app, callback) {
    app.locals.db.models.Category.findAll({
        attributes: ['id', 'name', 'slug'],
        include: [{
            model: app.locals.db.models.Subcategory,
            attributes: ['id', 'name', 'slug']
        }]
    }).then((categories) => callback(categories));
}

function getPostCategory(app, category, callback) {
    app.locals.db.models.Category.findAll({
        where: { slug: category },
        attributes: ['id', 'name', 'slug'],
        include: [{
            model: app.locals.db.models.Subcategory,
            attributes: ['id', 'name', 'slug']
        }]
    }).then((category) => callback(category));
}

function getCategorySubcategories(app, category, subcategory, callback) {
    app.locals.db.models.Category.findAll({
        where: { slug: category },
        attributes: ['id', 'name', 'slug'],
        include: [{
            model: app.locals.db.models.Subcategory,
            where: { slug: subcategory },
            attributes: ['id', 'name', 'slug'],
            include: [{
                model: app.locals.db.models.Post,
                attributes: ['id', 'name', 'price'],
                include: [{ all: true }]
            }]
        }]
    }).then((subcategory) => callback(subcategory));
}

module.exports = {
    getPostCategories: getPostCategories,
    getPostCategory: getPostCategory,
    getCategorySubcategories: getCategorySubcategories
}