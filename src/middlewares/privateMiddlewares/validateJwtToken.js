import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.SECRET_KEY || "!5S5G6$1AE@";

const validateJwtToken = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    try {
        const decodedToken = jwt.verify(token, SECRET);
        res.locals.userId = decodedToken.userId;
        next();
    } catch (err) {
        return res.status(401).send("Faça login novamente!")
    }
}
export default validateJwtToken;