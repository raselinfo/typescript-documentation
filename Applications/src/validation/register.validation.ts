import Joi from "joi";

export const RegisterValidation = Joi.object({
    firstName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
})