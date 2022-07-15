import Joi from "joi";
//TODO: change schema allowed colors
const createCardSchema = Joi.object({
    title: Joi.string().min(4).max(20).required(),
    color: Joi.string().required(),
    category: Joi.string().required(),
    content: Joi.string().required(),
    userId: Joi.string().required(),
})

export default createCardSchema;