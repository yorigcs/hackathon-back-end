import mongoDB from "../../database/mongoDB.js";
import bcrypt from "bcrypt";

const validateSignIn = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const isRegistered = await mongoDB.collection("users").findOne({ email });
        const isValidPassword = bcrypt.compareSync(password, isRegistered?.password);

        if (!isRegistered || !isValidPassword) {
            return res.status(422).send("Senha ou email incorretos!")
        }
        
        res.locals.userData = { email, password, userId: isRegistered._id, name: isRegistered.name};
        next();

    } catch (err) {
        console.error(err)
        return res.status(500).send("Houve um problema ao fazer o login, tente novamente mais tarde!")
    }
}

export default validateSignIn;