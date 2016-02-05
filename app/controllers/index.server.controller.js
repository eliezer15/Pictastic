exports.hello = function(req, res, next) {
    res.jsonp('Hello World!');
};