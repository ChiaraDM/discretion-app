const Token = require("../models/token");

async function authenticator(req, res, next) {
    
    try {
        console.log("HEADERS:", req.headers)
        const userToken = req.headers["authorization"];

        if (!userToken) {
            throw new Error("User not authenticated.");
        } else {
            await Token.getOneByToken(userToken);

            next();
        }

    } catch (err) {
        res.status(403).json({ error: err.message });
    }
}

module.exports = authenticator;