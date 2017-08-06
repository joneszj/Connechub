function get(app, profileId, callback) {
    app.locals.db.models.Profile.findOne({where: { id: profileId }, include: [{ all: true }]}).then((profile) => callback(profile));
}

function create(app, attributes, callback) {
    app.locals.db.models.Profile.create({
        //...
    }).then((profile) => callback(profile));
}

function update(app, attributes, profileid, callback) {
    app.locals.db.models.Profile.update({
        where: { profileid: profileid }
        //...
    }).then((profile) => callback(profile));
}

function remove(app, profileId, callback) {
    app.locals.db.models.Profile.remove({ where: { id: profileId } }).then((profile) => callback(profile));
}

module.exports = {
    get: get,
    create: create,
    update: update,
    remove: remove
} 