const jwt = require("jsonwebtoken");

exports.sign = (id, username) => { 
    try {
        const token = jwt.sign({
            id, username
        }, process.env.SECRET, { expiresIn: '3600' });

        return token;
    } catch (error) {
        console.error(error);
    }
}