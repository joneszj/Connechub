function getPost(app, postid, callback) {
    app.locals.db.models.Post.findById(postid, {
        attributes: ['id', 'name']
    }).then((post) => callback(post));
}

module.exports = {
    getPost: getPost 
} 