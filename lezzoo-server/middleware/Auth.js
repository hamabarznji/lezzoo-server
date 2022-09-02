const jwt = require("jsonwebtoken");
const date = new Date();

class Authentication {
    verifyToken = async (req, res, next) => {
        const { authorization } = req.headers;
        if (!authorization)
            return res
                .status(401)
                .send(
                    "<h1 style='text-align:center'>Access Denied! You are not allowed to access this api(Unauthorized).</h1>"
                );

        const token = authorization.split(" ")[1];
        try {
            jwt.verify(token, process.env.USER_TOKEN_SECRET);
            next();
        } catch (error) {
            res.status(401).send(
                "<h1 style='text-align:center'>Access Denied! You are not allowed to access this api(Unauthorized).</h1>"
            );
        }
    };

    isAuthenticated = async (req, res, next) => {
        const { authorization } = req.headers;
        if (!authorization) return res.status(401).send(false);

        const token = authorization.split(" ")[1];

        try {
            jwt.verify(token, process.env.USER_TOKEN_SECRET);
            next();
            res.send({
                isAuthenticated: true,
                token: token,
            });
        } catch (error) {
            res.status(401).send(error.message);
        }
    };

    userTokenGenerator = ({ phone }) => {
        return jwt.sign({ phone, date }, process.env.USER_TOKEN_SECRET);
    };
}

module.exports = new Authentication();
