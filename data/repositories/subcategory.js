function get(app, category, subcategory, callback) {
    app.locals.db.models.Category.findAll({
        where: (() => {
            if (category) return { slug: category };
            else { return {}; }
        })(),
        attributes: ['name', 'slug'],
        include: [{
            model: app.locals.db.models.Subcategory,
            where: (() => { 
                if (subcategory)  return { slug: subcategory }; 
                else { return {} } 
            })(),
            attributes: ['name', 'slug'],
            include: [{
                model: app.locals.db.models.Post,
                attributes: ['id', 'name', 'price', 'profileid']
            }]
        }]
    }).then((subcategory) => callback(subcategory));
}

module.exports = {
    get: get
}