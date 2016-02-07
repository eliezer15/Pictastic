module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.hello);
    app.get('/upload', function(req, res){
        res.render('upload.html');
    });
    app.get('/sign_s3', index.sign_s3);
    app.post('/submit_form', index.create);
};