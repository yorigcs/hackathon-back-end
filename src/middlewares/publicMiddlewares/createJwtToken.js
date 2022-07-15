import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.SECRET_KEY || "!5S5G6$1AE@";

const createJwtToken = (req, res, next) => {
    const { userData } = res.locals;
    const token = jwt.sign(userData, SECRET, { expiresIn: "1h" });
    const user = {
        name: userData.name,
        userId: userData.userId
    }
    res.locals.data = { user, token };
    next();
};

export default createJwtToken;