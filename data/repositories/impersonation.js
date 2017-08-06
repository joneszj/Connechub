function create(app, postid, attributes, callback) {
        app.locals.db.models.Impersonation.create({
            //...
        }).then(() => callback());        
}

module.exports = {
    create: create
}