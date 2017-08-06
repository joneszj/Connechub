function getProfile(app, profileId, callback) {
    app.locals.db.models.Profile.findOne({where: { id: profileId }, include: [{ all: true }]}).then((profile) => callback(profile));
}

module.exports = {
    getProfile: getProfile 
} 