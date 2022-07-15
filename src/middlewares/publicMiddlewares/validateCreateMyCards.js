import createCardSchema from "../../schemas/validateCreateMyCardSchema.js";

const validateCreateMyCard = (req, res, next) => {
    const { title, color, category, content } = req.body;
    const { userId } = res.locals;
    const schema = createCardSchema.validate({ title, color, category, content, userId })
    if (schema.error) {
        return res.status(422).send("Dados inválidos!")
    }
    res.locals.cardData = { title, color, category, content, userId };
    next();
};

export default validateCreateMyCard;