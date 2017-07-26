function search(app, search, location, category, callback) {
    app.locals.db.models.Category.findAll({
        where: { name: category },
        attributes: ['id', 'name'],
        include: [{
            model: app.locals.db.models.Subcategory,
            attributes: ['id', 'name'],
            include: [{
                model: app.locals.db.models.Post,
                attributes: ['id', 'name', 'location'],
                where: buildWhereClause(search, location)
            }]
        }]
    }).then((result) => callback(result))
}

function buildWhereClause(search, location) {
    var where = {};
    if (search) {
        where.name = { $like: "%" + search + "%" }
    }
    if (location) {
        where.location = { $like: "%" + location + "%" }
    }
    return where;
}

module.exports = {
    search: search
}