const jwt = require('jsonwebtoken');
const SECRET_CODE = "Hamid#Raza";

const fetchUser = (request, response, next) => {
    // Get User from jwt token to fetch ID
    const token = request.header("auth-token");
    if (!token) {
        return response.status(401).send({ error: "Please authenticate using valid token" });
    }
    try {
        const data = jwt.verify(token, SECRET_CODE);
        request.user = data.user;
        next();
    } catch(error) {
        return response.status(401).send({ error: "Please authenticate using valid token" });
    }
}

module.exports = fetchUser;