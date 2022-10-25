function logRoutes(req, res, next) {
    console.log(req.method, req.originalUrl);
    // console.log(req.method, req.originalUrl, req.rawHeaders);
    next();
}

module.exports = logRoutes;