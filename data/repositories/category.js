function getPostCategories(app, callback) {
    app.locals.db.models.Category.findAll({
        attributes: ['id', 'name'],
        include: [{
            model: app.locals.db.models.Subcategory,
            attributes: ['id', 'name']
        }]
    }).then((categories) => callback(categories));
}

function getPostCategory(app, category, callback) {
    app.locals.db.models.Category.findAll({
        where: { name: category },
        attributes: ['id', 'name'],
        include: [{
            model: app.locals.db.models.Subcategory,
            attributes: ['id', 'name']
        }]
    }).then((category) => callback(category));
}

function getCategorySubcategories(app, category, subcategory, callback) {
    app.locals.db.models.Category.findAll({
        where: { name: category },
        attributes: ['id', 'name'],
        include: [{
            model: app.locals.db.models.Subcategory,
            where: { name: subcategory },
            attributes: ['id', 'name'],
            include: [{
                model: app.locals.db.models.Post,
                attributes: ['id', 'name', 'location']
            }]
        }]
    }).then((subcategory) => callback(subcategory));
}

module.exports = {
    getPostCategories: getPostCategories,
    getPostCategory: getPostCategory,
    getCategorySubcategories: getCategorySubcategories
}