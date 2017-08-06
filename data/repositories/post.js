function get(app, postid, profileid, callback) {
    app.locals.db.models.Post.findAll({
        where: (() => {
            if (postid) { return { profileid: profileid, id: postid }; } 
            else { return { profileid: profileid }; }
        })(),
        include: [{ all: true }]
    }).then((post) => callback(post));        
}

function create(app, attributes, callback) {
    app.locals.db.models.Post.create({
        //...
    }).then((post) => callback(post))
    .catch((err) => { });
}

function update(app, attributes, profileid, callback) {
    app.locals.db.models.Post.update({
        where: { profileid: profileid, id: postid }
        //...
    }).then((post) => callback(post))
    .catch((err) => { });    
}

function remove(app, postid, profileid, callback) {
    app.locals.db.models.Post.destroy({
        where: { profileid: profileid, id: postid }
    }).then(() => callback())
    .catch((err) => { });    
}

module.exports = {
    get: get,
    create: create,
    update: update,
    remove: remove
} 