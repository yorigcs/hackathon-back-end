import mongoDB from "../../database/mongoDB.js";
import bcrypt from "bcrypt";
import validateSignUpSchema from "../../schemas/validateSignUpSchema.js"

const validateSignUpMiddleware = async (req, res, next) => {
    const { name, email, password, confirmPw } = req.body;
    const imageURL = "https://i.imgur.com/smXgrH1.png";

    const isValid = validateSignUpSchema.validate({ name, email, password, confirmPw });

    if (isValid.error || password !== confirmPw) {
        return res.status(422).send("Dados inválidos!")
    }

    try {
        const isRegistered = await mongoDB.collection("users").findOne({ email });
        if (isRegistered) {
            return res.status(400).send("O usuário já existe!");
        }
        const encryptedPassword = bcrypt.hashSync(password, 10);
        res.locals.signUpData = { name, email, password: encryptedPassword, imageURL };
        next();
    } catch (err) {
        console.error(err);
        return res.status(500).send("Houve um erro ao consultar o banco de dados!")

    }

}

export default validateSignUpMiddleware;