var s3Wrapper = require('../../lib/awsWrapper');

exports.hello = function(req, res, next) {
    res.jsonp('Hello World!');
};

exports.sign_s3 = function(req, res) {
    s3Wrapper.sign_s3(req.query.file_name, req.query.file_type)
        .then(function(response) {
            res.json(response);
        }, function(error) {
            console.error(error);
        });
};

exports.create = function(req,res) {
    res.write("Form has been submitted");
    res.end();
};