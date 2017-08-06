function get(app, category, callback) {
        app.locals.db.models.Category.findAll({
            where: (() => {
                if (category) { return { slug: category }; }
                else { return { }; }
            })(),
            attributes: ['name', 'slug'],
            include: [{
                model: app.locals.db.models.Subcategory,
                attributes: ['name', 'slug']
            }]
        }).then((categories) => callback(categories));        
}

module.exports = {
    get: get
}