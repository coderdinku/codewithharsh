const jwt = require('jsonwebtoken');
const JWT_SECRET = "mohsinisagoodb$oy"

const loginCheck = async(req, res, next) => {
    const token = req.header("auth-token")
    if (!token) {
        res.status(401).json({ error: "Access Denied1" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).json({ error: "Access Denied2" })
    }
}

module.exports= loginCheck;