import Joi from "joi";

const signUpSchema = Joi.object({
    name: Joi.string().min(4).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$")).required(),
    confirmPw: Joi.string().pattern(new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$")).required(),
})

export default signUpSchema;